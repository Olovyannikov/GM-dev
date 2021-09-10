import * as React from 'react';
import s from './AddDevice.module.scss';
import {AddDeviceIcon} from '../../../../../../../components/icons';

export const AddDevice = () => {


    return (
        <button className={`btn-reset ${s.addDevice}`}
                aria-label={`Добавить устройство`}
        >
            <AddDeviceIcon/>
            <span>Добавить устройство</span>
        </button>
    );
};
