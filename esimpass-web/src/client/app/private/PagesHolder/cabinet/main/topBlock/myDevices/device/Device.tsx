import * as React from 'react';
import s from './Device.module.scss';
import { ListDevicesResponse } from 'generated/proto.web';

interface DeviceModel {
    device? : ListDevicesResponse.SuccessModel.DeviceModel;
    trigger?: any;
    isActiveStatus?: boolean;
    type?: string;
    name?: string;
    user?: string;
    onClick?: any;
}

export const Device = (props : DeviceModel) => {

    return (
        <div onClick={props.onClick} className={`${s.device} ${props.type} ${props.isActiveStatus ? s.active : s.inactive}`}>
            {/*Device {props.device.deviceId}*/}
            <div className={s.content}>
                <p className={s.name}>{props.user}</p>
                <small className={`${s.status}`}>{props.isActiveStatus ? props.name || "Активирован" : "Не активировано"}</small>
                <span className={`${s.statusBadge}`}>{props.isActiveStatus ? "Активен" : "Неактивен"}</span>
            </div>
        </div>
    )
}
