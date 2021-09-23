import * as React from 'react';
import s from './AddDevice.module.scss';
import {AddDeviceIcon} from '../../../../../../../components/icons';
import { STATE_API } from 'redux/StateApi';

export const AddDevice = () => {

    return (
        <button onClick={() => {
            STATE_API.showPrivateWizard(`activationCarrier`)
        }} className={s.addDevice} aria-label={`Добавить устройство`}>
            <AddDeviceIcon/>
            <span>Добавить устройство</span>
        </button>
    );
};
