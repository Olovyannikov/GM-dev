import * as React from 'react';
import s from './OrderESIM.module.scss';
import {FarrowIcon} from "../../../../../../components/icons";

export const OrderESIM = () => {

    return (
        <section className={s.esim}>
            <h2 className={s.title}>Пополните баланс на минимальную сумму</h2>
            <p className={s.descr}>Для активации eSIM пополните баланс на минимальную сумму в <span>560₽</span>. Без
                этого, мы не
                сможем выслать вам QR-код для настройки eSIM на вашем устройстве.</p>
            <button className='cabinet-later'>Пополнить позже <FarrowIcon/></button>
            <ul className={s.list}>
                <li className={`${s.card} ${s.cardDark}`}>
                    <h3 className={s.cardTitle}>Супер eSIM Pass</h3>
                    <h4 className={s.cardSubtitle}>Самое выгодное пополнение!</h4>
                    <p className={s.cardDescr}>После покупки вся сумма оплаты будет переведена на ваш баланс eSIM. Этот баланс вы можете
                        тратить на покупку любых тарифов.</p>
                    <button className='card-btn' type="button">Купить за 560₽</button>
                </li>
                <li className={`${s.card}`}>
                    <h3 className={s.cardTitle}>Стандартный eSIM Pass</h3>
                    <p className={s.cardDescr}>После покупки вы получаете все те же возможности, что и для Супер eSIM pass, но указанная
                        стоимость eSIM не будет зачислена на ваш баланс</p>
                    <button className='card-btn' type="button">Купить за 230₽</button>
                </li>
            </ul>
        </section>
    )
}
