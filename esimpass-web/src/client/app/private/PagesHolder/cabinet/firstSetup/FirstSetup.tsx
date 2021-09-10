import * as React from 'react';

import s from './FirstSetup.module.scss';
import {Container} from "../../../components/container/Container";
import {GradientBackground} from "../../../../components/icons";
import {Compatibility} from './compatibility/Compatibility';
import {Action} from '@glonassmobile/codebase-web/Action';
import {OrderCarrier} from './orderCarrier/OrderCarrier';
import {PersonalData} from './personalData/PersonalData';
import {createAction} from 'redux/actions/createAction';

export type SetupSteps = 'compability' | 'orderCarrier' | 'personalData';

export enum ActionTypes {
    CHANGE_STEP = 'CHANGE_STEP',
    CHECK_FITS_DEVICE = 'CHECK_FITS_DEVICE'
}

interface FirstSetupStateModel {
    setupStep: SetupSteps;
    fitsDevice?: boolean;
}

export const FirstSetup = () => {

    const INITIAL_STATE: FirstSetupStateModel = {
        setupStep: 'compability',
    }

    const reducer = (state: FirstSetupStateModel, action: Action<any>): FirstSetupStateModel => {
        switch (action.type) {
            case ActionTypes.CHANGE_STEP:
                return {
                    ...state,
                    setupStep: action.payload,
                }
            case ActionTypes.CHECK_FITS_DEVICE:
                return {
                    ...state,
                    fitsDevice: action.payload
                }
            default :
                return state
        }
    }

    const changeStepAction = (step: SetupSteps) => createAction(ActionTypes.CHANGE_STEP, step);
    const changeFitsStatus = (fits: boolean) => createAction(ActionTypes.CHECK_FITS_DEVICE, fits);

    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

    const renderStep = () => {
        if (state.setupStep === 'compability') {
            return <Compatibility changeStepAction={changeStepAction} changeFitsStatus={changeFitsStatus}
                                  dispatch={dispatch}/>
        } else if (state.setupStep === 'orderCarrier') {
            return <OrderCarrier fits={state.fitsDevice}/>
        } else if (state.setupStep === 'personalData') {
            return <PersonalData/>
        }
    }

    const handleClickBack = (step : SetupSteps) => {
        if (state.setupStep === 'orderCarrier' || state.setupStep === 'personalData') {
            dispatch(changeStepAction(step))
        }
    }

    return (
        <section className={s.firstSetup}>
            <Container>
                <h1 className={s.title}>Добро пожаловать в ваш личный кабинет!
                    <GradientBackground/>
                </h1>
                <p className={s.subtitle}>Пока что ваша eSIM не активирована. Мы поможем вам её активировать, просто
                    следуйте всем шагам настройки.</p>
                <div className={s.activate}>
                    <div className={s.top}>
                        <ol className={`list-decimal`}>
                            <li className={s.active}>
                                <button onClick={() => handleClickBack('compability')} className={'btn-reset'} type={'button'}>Совместимость</button>
                            </li>
                            <li className={state.setupStep === 'orderCarrier' || state.setupStep === 'personalData' ? s.active : ''}>
                                <button className={'btn-reset'} type={'button'} onClick={() => handleClickBack('orderCarrier')}>{state.fitsDevice ? `Пополните баланс` : `Закажите SIM-карту`}</button>
                            </li>
                            <li className={state.setupStep === 'personalData' ? s.active : ''}>Персональные данные</li>
                        </ol>
                    </div>
                    {renderStep()}
                </div>
            </Container>
        </section>
    )
}
