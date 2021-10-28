import * as React from 'react';

import s from './ModalDesktop.module.scss';
import {Arrow, Smartphone, Tablet, Watches} from "../../../../components/icons";
import {supportedEsimDevices, Brands} from 'codebase/supportedEsimDevices';
import {Action} from '@glonassmobile/codebase-web/Action';
import {Button} from "../../../../components/button/Button";

interface ButtonModel {
    icon: JSX.Element;
    type: string;
}

interface State {
    type: string;
    brand: string;
    device: string;
}

enum ActionTypes {
    CHANGE_TYPE = 'CHANGE_TYPE',
    CHANGE_BRAND = 'CHANGE_BRAND'
}

export const ModalDesktop = () => {

    const buttons: ButtonModel[] = [
        {icon: <Tablet/>, type: 'Планшет'},
        {icon: <Smartphone/>, type: 'Смартфон'},
        {icon: <Watches/>, type: 'Часы'},
    ];

    const INITIAL_STATE: State = {
        type: '',
        brand: '',
        device: ''
    }

    const reducer = (state: State, action: Action<string>): State => {
        switch (action.type) {
            case ActionTypes.CHANGE_TYPE:
                return {
                    ...state,
                    type: action.payload
                }
            case ActionTypes.CHANGE_BRAND:
                return {
                    ...state,
                    brand: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

    return (
        <>
            <div className={s.mainDesktop}>
                <div className={s.pickDevice}>
                    <h3 className={s.pickTitle}>1.Выберите устройство</h3>
                    <div className={s.devices}>
                        {buttons.map((el) => (
                            <button
                                onClick={() => dispatch({type: ActionTypes.CHANGE_TYPE, payload: el.type})}
                                key={el.type}
                                className={`btn-reset ${s.device} ${el.type === state.type ? s.active : ''}`}
                            >
                                {el.icon}
                                <span>{el.type}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={`${s.pickDevice} ${s.maintainers}`}>
                    <h3 className={s.pickTitle}>2.Выберите производителя</h3>
                    <ul className={`list-reset ${s.maintainerList}`}>
                        {state.type && supportedEsimDevices[state.type].map((el: Brands) =>
                            <li
                                key={el.brand}
                                onClick={() => dispatch({type: ActionTypes.CHANGE_BRAND, payload: el.brand})}
                            >
                                <button
                                    className={`btn-reset ${state.brand === el.brand ? s.active : ''}`}>
                                    {el.brand}
                                    {el.brand === state.brand ? <Arrow/> : ''}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={`${s.pickDevice} ${s.deviceList}`}>
                    <h3 className={s.pickTitle}>3.Проверьте устройство</h3>
                    <ul className={`list-reset ${s.maintainerList}`}>
                        {state.brand && supportedEsimDevices[state.type].find((el: Brands) => state.brand ? el.brand === state.brand : false)?.devices.map((device: string) => (
                            <li key={device}>{device}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={s.controls}>
                <Button>Устройство подходит</Button>
                <Button color="secondary">Заказать стандартную SIM-карту</Button>
            </div>
        </>
    )
}
