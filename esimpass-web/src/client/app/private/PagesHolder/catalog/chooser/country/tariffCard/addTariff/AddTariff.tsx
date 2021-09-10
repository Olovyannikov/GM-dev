import s from './AddTariff.module.scss';
import * as React from 'react';
import { PadIcon, SmartphoneIcon, UnknownIcon, WatchIcon } from '../../../../../../../components/icons';
import { Button } from '../../../../../../../components/button/Button';
import { Preloader } from './preloader/Preloader';

const devices = [
    {
        type: 'tel',
        agent: 'Вы',
        device: 'iPhone 6 Plus',
    },
    {
        type: 'tab',
        agent: 'Ксюха',
        device: 'iPad Pro',
    },
    {
        type: 'wat',
        agent: 'Ксюха',
        device: 'Galaxy Watch Plus',
    },
    {
        type: 'unk',
        agent: 'Рамирес',
        device: 'Неизвестно',
    },
];

interface AddTariffModel {
    setModalActive?: any;
}

export const AddTariff = (props: AddTariffModel) => {
    return (
        <div className={s.addTariff}>
            <div className={s.addTariffTop}>
                <h5 className={s.addTariffTitle}>К какому устройству подключить тариф?</h5>
                <button className={s.close} type={'button'} onClick={() => props.setModalActive(false)} />
            </div>
            <ul className={`list-reset ${s.addTariffDevices}`}>
                {devices.map((device, id) => (
                    <li key={id}>
                        <label>
                            {device.type === 'tel' ?
                                <SmartphoneIcon /> :
                                device.type === 'wat' ?
                                    <WatchIcon /> :
                                    device.type === 'unk' ?
                                        <UnknownIcon /> : <PadIcon />
                            }
                            <p>{device.agent} ({device.device})</p>
                            <input type='radio' name='device' />
                            <span />
                        </label>
                    </li>
                ))}
            </ul>
            <Button className={s.chooseBtn} size={'small'}>Выбрать</Button>
            {/*<Preloader/>*/}
        </div>
    );
};
