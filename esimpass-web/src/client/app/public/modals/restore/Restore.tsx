import * as React from 'react';
import * as ro from 'rxjs/operators';
import * as rx from 'rxjs';

import s from './Restore.module.scss';
import {BackArr} from "../../../components/icons";
import {Button} from "../../../components/button/Button";
import {convertEndingOfNoun, Logger, nothingToNull, waitForClose} from 'utils';
import {DefaultStateComponent} from 'codebase/types';
import {RequestPasswordRestoreRequest, RequestPasswordRestoreResponse} from 'generated/proto.web';
import {CONNECTION} from 'Connection';
import {STATE_API} from 'redux/StateApi';
import image from '../../../../resources/img/svg/password.svg';
import {ContentWrapper} from './../common/contentWrapper/ContentWrapper';

interface RestoreState extends DefaultStateComponent {
    success?: boolean;
}

export const Restore: React.FC = () => {

    const logger = new Logger('LoginForm');

    const closedSubject = waitForClose();

    const [state, setState] = React.useState<RestoreState>({});

    const emailInput = React.useRef<HTMLInputElement>();

    const handlePasswordRestore = () => {

        if (nothingToNull(emailInput.current.value)) {

            setState(prev => ({
                ...prev,
                inProgress: true,
            }));

            CONNECTION.requestPasswordRestore(createRequestPasswordRestore())
                .pipe(
                    ro.tap(parsePasswordRestoreResponse),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe('Error restore password in'))
        } else {
            handlePlainError('Заполните поле!')
        }

    }

    const parsePasswordRestoreResponse = (response: RequestPasswordRestoreResponse) => {

        if (response.success) {
            setState(prev => ({
                ...prev,
                inProgress: false,
                error: null,
                success: true,
            }));
        } else if (response.tooManyErrorAttempts) {
            handleToManyErrorAttemptsResponse(response)
        } else if (response.invalidEmail) {
            handlePlainError('Неверная электронная почта')
        } else if (response.accountNotFound) {
            handlePlainError('Аккаунт не существует')
        } else if (response.expired) {
            handlePasswordRestore();
        }
    }

    const handleToManyErrorAttemptsResponse = (response: RequestPasswordRestoreResponse) => {
        const secondsToWait = Math.round(parseInt(response.tooManyErrorAttempts) / 1000)

        rx.interval(1000)
            .pipe(
                ro.map(r => secondsToWait - r),
                ro.tap(secondsToWait => {

                    if (secondsToWait > 0) {
                        handlePlainError(`Повторить можно через ${secondsToWait} ${convertEndingOfNoun(secondsToWait)}`)
                        setState(prev => ({
                            ...prev,
                            inProgress: true,
                        }));
                    } else {
                        handlePlainError(null)
                    }
                }),
                ro.takeWhile(secondsToWait => secondsToWait > 0),
                ro.takeUntil(closedSubject)
            )
            .subscribe(logger.rx.subscribe("Error restore password in"))
    }

    const handlePlainError = (error: string) => {
        setState(prev => ({
            ...prev,
            error,
            inProgress: false,
        }))
    }

    const handleEventEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handlePasswordRestore()
        }
    }

    const showError = () => {
        if (state.error) {
            return <p className="error mb-4">{state.error}</p>
        }
    }

    const createRequestPasswordRestore = (): RequestPasswordRestoreRequest => ({email: emailInput.current.value})

    const renderContent = () => {
        if (state.success) {
            return (
                <>
                    <div className={s.image}>
                        <img src={image}/>
                    </div>
                    <p className={s.imageDescr}>Пароль отправлен на вашу почту!</p>
                    <Button onClick={STATE_API.hideModal} size={'large'} disabled={state.inProgress}
                            color={'primary'}>Вернуться на главную</Button>
                </>
            )
        } else {            
            return (                              
                <div className={s.main}>
                    <p className={s.descr}>
                        На данный email мы отправим письмо с паролем от аккаунта. В случае если вы не помните
                        электронную почту, то позвоните по номеру <br/> 8 (903) 234-43-34, мы постараемся помочь
                        вам.
                    </p>
                    <div onKeyDown={handleEventEnter} className={s.form}>
                        <label className={`label full`}>
                            <input className={`input ${state.error ? 'invalid' : ''}`} ref={emailInput} type="text"
                                    disabled={state.success} required/>
                            <span>Электронная почта</span>
                        </label>
                        {showError()}
                        <Button onClick={handlePasswordRestore} size={'large'} disabled={state.inProgress}
                                color={'primary'}>Пришлите мне пароль</Button>
                    </div>
                </div>
            )
        }
    }

    const backBtn: React.ReactElement = (
        <button onClick={() => STATE_API.showPublicWizard("auth")} className={`btn-reset ${s.btnLeft}`}>
            <BackArr/>
        </button>
    ); 

    return (
        <ContentWrapper 
            title={!state.success ? 'Восстановление пароля' : ''} 
            leftBtn={!state.success && backBtn} 
            headerClassName={s.header}
            containerClassName={s.container}
            className={s.restore}
        >
            {renderContent()}
        </ContentWrapper>
    );

}
