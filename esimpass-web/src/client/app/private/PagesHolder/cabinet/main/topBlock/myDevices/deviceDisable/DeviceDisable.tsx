import { Modal } from 'app/components/modal/Modal';
import React from 'react';
import s from './DeviceDisable.module.scss';

interface DeviceDisableModel {
    active?: boolean,
    setActive?: any
}

export const DeviceDisable = (props: DeviceDisableModel) => {
    return (
        <Modal active={props.active} setActive={() => props.setActive(!props.active)} className={s.deviceModalContent}>
            <div className={s.top}>
                <h3>Отключить устройство</h3>
                <button onClick={() => props.setActive(false)} className={`${s.burger} ${s.active}`}/>
            </div>
            <div className={s.main}></div>
            <div className={s.controls}></div>
        </Modal>
    )
}
