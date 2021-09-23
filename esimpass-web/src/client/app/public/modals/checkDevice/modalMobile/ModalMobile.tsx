import s from './ModalMobile.module.scss';
import {BackArr, Smartphone, Tablet, Watches} from "../../../../components/icons";
import {Container} from "../../../../components/container/Container";
import * as React from "react";
import {Action} from "@glonassmobile/codebase-web/Action";
import {Button} from "./button/Button";
import {Brands, supportedEsimDevices} from "../../../../../codebase/supportedEsimDevices";

interface ButtonModel {
    icon: JSX.Element;
    type: string;
}

interface State {
    type: string;
    brand: string;
    device: string;
    deviceModal: string;
    brandModal: string;
}

enum ActionTypes {
    CHANGE_TYPE = 'CHANGE_TYPE',
    CHANGE_BRAND = 'CHANGE_BRAND',
    OPEN_DEVICE_MODAL = 'OPEN_DEVICE_MODAL',
    OPEN_BRAND_MODAL = 'OPEN_BRAND_MODAL'
}

export const ModalMobile = () => {

    const buttons: ButtonModel[] = [
        {icon: <Tablet/>, type: 'Планшет'},
        {icon: <Smartphone/>, type: 'Смартфон'},
        {icon: <Watches/>, type: 'Часы'},
    ];

    const INITIAL_STATE: State = {
        type: '',
        brand: '',
        device: '',
        deviceModal: '',
        brandModal: ''
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
            case ActionTypes.OPEN_DEVICE_MODAL:
                return {
                    ...state,
                    deviceModal: action.payload
                }
            case ActionTypes.OPEN_BRAND_MODAL:
                return {
                    ...state,
                    brandModal: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

    const toggleDevice = () => {
        (dispatch({type: ActionTypes.OPEN_DEVICE_MODAL, payload: state.deviceModal ? '' : 'open'}));
    };
    const toggleMaintainer = () => {
        (dispatch({type: ActionTypes.OPEN_BRAND_MODAL, payload: state.brandModal ? '' : 'open'}));
    }

    return (
        <>
            <div className={s.mobileControls}>
                <Button active={true} title={state.type} placeholder={'Выберите устройство'}
                        toggleDevice={toggleDevice}/>
                <Button active={!!state.type} title={state.brand} placeholder={'Выберите производителя'}
                        toggleDevice={toggleMaintainer}/>

                <ul className={`list-reset ${s.maintainerList}`}>
                    {state.brand && supportedEsimDevices[state.type].find((el: Brands) =>
                        state.brand ? el.brand === state.brand : false)?.devices.map((device: string) => (
                        <li key={device}>{device}</li>
                    ))}
                </ul>
            </div>

            <section className={`${s.deviceChoose} ${state.deviceModal ? s.active : ''}`}>
                <Container>
                    <div className={s.top}>
                        <button className={`btn-reset ${s.back}`} onClick={toggleDevice}>
                            <BackArr/>
                        </button>
                        <h2 className={s.title}>Выберите устройство</h2>
                    </div>
                    <div className={s.main}>
                        <ul className={`list-reset ${s.deviceList}`}>
                            {buttons.map((button, id: number) => (
                                <li className={` ${state.type == button.type ? s.active : ''}`} key={id}>
                                    <button onClick={() => {
                                        dispatch({type: ActionTypes.CHANGE_TYPE, payload: button.type})
                                        toggleDevice();
                                    }}
                                            className={`btn-reset`}>{button.type}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            <section className={`${s.deviceChoose} ${state.brandModal ? s.active : ''}`}>
                <Container>
                    <div className={s.top}>
                        <button className={`btn-reset ${s.back}`} onClick={toggleMaintainer}>
                            <BackArr/>
                        </button>
                        <h2 className={s.title}>Выберите производителя</h2>
                    </div>
                    <div className={s.main}>
                        <ul className={`list-reset ${s.deviceList}`}>
                            {state.type && supportedEsimDevices[state.type].map((el: Brands) =>
                                <li
                                    key={el.brand}
                                    onClick={() => {
                                        dispatch({type: ActionTypes.CHANGE_BRAND, payload: el.brand});
                                        toggleMaintainer();
                                    }}
                                    className={` ${state.brand === el.brand ? s.active : ''}`}
                                >
                                    <button
                                        className={'btn-reset'}
                                    >
                                        {el.brand}
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </Container>
            </section>


        </>
    )
}
