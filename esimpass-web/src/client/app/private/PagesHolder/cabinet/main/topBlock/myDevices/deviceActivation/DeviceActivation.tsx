import s from "./DeviceActivation.module.scss";
import {Modal} from "../../../../../../../components/modal/Modal";
import * as React from "react";
import {Sim} from "./sim/Sim";
import {Esim} from "./esim/Esim";

interface DeviceActivationModel {
    active?: boolean;
    setActive?: any;
}

export const DeviceActivation = (props: DeviceActivationModel) => {

    const tabs = [
        'eSim',
        'SIM-карта'
    ];

    const [selectedItem, setSelectedItem] = React.useState('eSim');

    const handleItemClick = (id: any) => {
        if (selectedItem != id) {
            setSelectedItem(id);
        }
    }

    const renderTabs = () => {
        if (selectedItem === 'eSim') return <Esim/>
        else return <Sim/>
    }

    return (
        <Modal active={props.active} setActive={props.setActive}>
            <div className={s.modal}>
                <div className={s.modalTop}>
                    <h4>Активация устройства</h4>
                    <button
                        className={`${s.burger} ${s.active}`}
                        aria-label="Закрыть модальное окно"
                        onClick={() => props.setActive(false)}
                    />
                    <div className={s.tabs}>
                        {tabs.map(tab => (
                            <button key={tab}
                                    className={`${s.tabBtn} ${selectedItem === tab ? s.active : ''}`}
                                    onClick={() => handleItemClick(tab)}
                                    type={'button'}>
                                {tab}
                            </button>
                            )
                        )}
                    </div>
                </div>
                {renderTabs()}
            </div>
        </Modal>
    )
}
