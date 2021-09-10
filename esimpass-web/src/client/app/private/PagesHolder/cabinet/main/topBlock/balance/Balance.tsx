import * as React from 'react';
import * as ro from 'rxjs/operators';
import * as rx from 'rxjs';
import s from './Balance.module.scss';

import { WebSocketAdapter } from 'codebase/WebSocketAdapter';
import { CONNECTION } from 'Connection';
import { Logger, waitForClose } from 'utils';
import { ListenBalanceResponse } from 'generated/proto.web';
import { TopUpBalance } from './topUpBalance/TopUpBalance';

export const Balance = () => {

    // const logger = new Logger('Balance');
    //
    // const closedSubject = waitForClose();
    //
    // const [balance, setBalance] = React.useState<string>('0.00');
    //
    // const balanceConventer = (balance: string): string => {
    //     return Number(balance).toFixed(2)
    // }
    //
    // React.useEffect(() => {
    //
    //     const ws = new WebSocketAdapter<any, ListenBalanceResponse>(CONNECTION.listenBalance())
    //
    //     const sub = rx.merge(
    //         ws.connect()
    //             .pipe(ro.ignoreElements()),
    //         ws.getErrorObservable(),
    //         ws.getCloseObservable()
    //             .pipe(ro.mergeMap(() => rx.throwError(() => "Closed"))),
    //         ws.getResponseObservable()
    //     )
    //         .pipe(
    //             ro.mergeMap(CONNECTION.checkStreamResponse),
    //             ro.tap(response => setBalance(prev => prev = balanceConventer(response.success.balance))),
    //             ro.takeUntil(closedSubject),
    //             ro.finalize(() => ws.close()),
    //             ro.retryWhen(logger.rx.retry("Reconnecting"))
    //         )
    //         .subscribe(logger.rx.subscribe("Listen balance"))
    //
    // })

    return (
        <div className={`${s.balance}`}> {/*Если ошибка, то класс s.error*/}
            <h3>Мой баланс:</h3>
            <h4>590 ₽</h4>
            {/*
            Далее параграф для вывода ошибок
            */}
            <p className='error'>{/*error message*/}</p>
            <TopUpBalance />
        </div>
    )
}
