import * as React from 'react';

import s from './TariffCard.module.scss';
import { Chevron, DateIcon, EarthIcon } from '../../../../../../components/icons';
import { Button } from '../../../../../../components/button/Button';
import { useState } from 'react';
import { Modal } from '../../../../../../components/modal/Modal';
import { AddTariff } from './addTariff/AddTariff';

export const TariffCard = () => {

    const [modalActive, setModalActive] = useState<boolean>(false);

    return (
        <div className={s.tariffCard}>
            <button className={`${s.back}`}><Chevron /></button>
            <div className={s.info}>
                <h3 className={s.title}>Trecello</h3>
                <p className={s.subtitle}>Prepaid</p>
                <div className={s.tariffConditions}>
                    <div className={`${s.condition} ${s.traffic}`}>
                        <div>
                            <h4>1 ГБ</h4>
                            <small>трафик</small>
                        </div>
                        <EarthIcon />
                    </div>
                    <div className={`${s.condition} ${s.days}`}>
                        <div>
                            <h4>15 дней</h4>
                            <small>трафик</small>
                        </div>
                        <DateIcon />
                    </div>
                </div>
                <p className={s.disclaimer}>Интернет доступен во всех уголках страны.</p>
                {/*<p className={`${s.disclaimer} ${s.error}`}>Вам не хватает 1200₽ для покупки тарифа</p>*/}
            </div>
            <div className={s.buy}>
                <h4 className={s.price}>2100 ₽</h4>
                <p>Пакет активируется на территории страны</p>
                <Button onClick={() => setModalActive(true)} size={'medium'}>Купить пакет интернета</Button>
                {/*<Button className={s.other} color={'text'}>Посмотреть другие</Button>*/}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <AddTariff setModalActive={setModalActive}/>
            </Modal>
        </div>
    );
};
