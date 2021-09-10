import * as React from 'react';
import * as ro from 'rxjs/operators';
import s from './TopUpBalance.module.scss';

import { DefaultStateComponent } from 'codebase/types';
import { CONNECTION } from 'Connection';
import { waitForClose, Logger } from 'utils';
import { CreateBalancePaymentRequest, CreateBalancePaymentResponse } from 'generated/proto.web';
import { Button } from 'app/components/button/Button';

interface TopUpBalanceStateModel extends DefaultStateComponent {
    minAmount?: string;
}

export const TopUpBalance = () => {

    const logger = new Logger('TopUpBalance');

    const closedSubject = waitForClose();

    const [state, setState] = React.useState<TopUpBalanceStateModel>({});
    const [balanceForm, setBalanceForm] = React.useState<boolean>(false);

    const balanceFormToggle = () => {
        setBalanceForm(!balanceForm);
    };

    const balanceInput = React.useRef<HTMLInputElement>();

    React.useEffect(() => {

        CONNECTION.getMinBalancePaymentAmmount({})
            .pipe(
                ro.tap(response => {
                    setState(prev => ({
                        ...prev,
                        inProgress: false,
                        minAmount: response.ammount,
                    }));
                }),
                ro.takeUntil(closedSubject),
            )
            .subscribe(logger.rx.subscribe('Error in receiving min abalance payment'));

    }, [state.minAmount]);

    const handleBalancePayment = () => {

        if (state.minAmount <= balanceInput.current.value) {
            setState(prev => ({
                ...prev,
                error: false,
                inProgress: true,
            }));

            CONNECTION.createBalancePayment(createBalancePaymentRequest())
                .pipe(
                    ro.tap(parseBalancePaymentResponse),
                    ro.takeUntil(closedSubject),
                )
                .subscribe(logger.rx.subscribe('Error balance payment'));
        } else {
            setState(prev => ({
                ...prev,
                error: true,
                inProgress: false,
            }));
        }
    };

    const handleOpenPaymentUrl = (url: string) => {

        const userAgent = window.navigator.userAgent;

        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
            window.location.assign(url);
        } else {
            window.open(url, '_blank');
        }
    };

    const parseBalancePaymentResponse = (response: CreateBalancePaymentResponse) => {
        if (response.success) {
            setState(prev => ({
                ...prev,
                inProgress: false,
            }));

            balanceInput.current.value = '';

            handleOpenPaymentUrl(response.success.url);

        } else if (response.ammountIsLessMinimal) {
            setState(prev => ({
                ...prev,
                inProgress: false,
                error: true,
            }));
        }
    };

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (document.activeElement === balanceInput.current) {
                handleBalancePayment();
            }
        }
    };

    const validateInput = (e: any) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        e.target.parentElement.querySelector('button').style.display = e.target.value !== '' ? 'block' : 'none';

    };

    const clearInput = (e: any) => {
        e.target.parentElement.querySelector('input').value = '';
        e.target.style.display = 'none';
    };

    const createBalancePaymentRequest = (): CreateBalancePaymentRequest => ({
        amount: balanceInput.current.value || '0',
    });

    const showDisclaimer = () => {
        if (state.error) {
            return <p className={`error`}>Не менее {state.minAmount} рублей</p>;
        } else {
            return <p>от {state.minAmount} до 30 000 рублей</p>;
        }
    };

    return (
        <div className={s.topup}>

            {balanceForm ?
                <div className={s.topupForm}>
                    <label className={'label full'}>
                        <input className={'input'} onInput={validateInput} required onKeyUp={handleEnterPress}
                               ref={balanceInput} disabled={state.inProgress} />
                        <span>Сумма пополнения</span>
                        <button onClick={clearInput} className={`${s.burger} ${s.active}`} type='button'
                                aria-label='Очистить' />
                    </label>
                    <button className={s.topupButton} onClick={handleBalancePayment}>К оплате</button>
                    {/*{showDisclaimer()}*/}
                </div>
                :
                <button
                    className={s.topupButton}
                    onClick={balanceFormToggle}
                    type='button'
                >
                    + Пополнить баланс
                </button>
            }
        </div>
    );
};
