import * as React from 'react';

import s from '../FirstSetup.module.scss';
import {Button} from 'app/components/button/Button';
import {ModalDesktop} from 'app/public/modals/checkDevice/modalDesktop/ModalDesktop';
import {Action} from '@glonassmobile/codebase-web/Action';
import {ActionTypes, SetupSteps} from '../FirstSetup';

interface CompabilityModel {
    dispatch?: React.Dispatch<Action<any>>;
    changeFitsStatus: (fits: boolean) => Action<boolean>;
    changeStepAction: (step: SetupSteps) => Action<SetupSteps>
}

export const Compatibility = (props: CompabilityModel) => {

    const handleFitsDevice = (status: boolean) => {
        props.dispatch(props.changeStepAction('orderCarrier'))
        props.dispatch(props.changeFitsStatus(status))
    }

    return (
        <div className={s.activate}>
            <div className={s.check}>
                <h3>Проверьте, совместимо ли ваше устройство с eSIM?</h3>
                <p>В случае если ваше устройство не подойдёт для подключения eSIM, вы можете заказать ничем не
                    уступающую по функциональности SIM-карту.</p>
                <div className={s.buttons}>
                    <Button onClick={() => handleFitsDevice(true)} size={'badge'} color={'primary'}>Да, устройство
                        подходит</Button>
                    <Button onClick={() => handleFitsDevice(false)} size={'badge'} color={'warning'}>Нет, устройство не
                        подходит</Button>
                </div>
                <div className={s.device}>
                    <ModalDesktop/>
                </div>
            </div>
        </div>
    )
}

