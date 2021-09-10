import * as React from 'react';
import s from './OrderSIM.module.scss';
import {FarrowIcon} from "../../../../../../components/icons";
import {OrderSIMForm} from "./orderSIMForm/OrderSIMForm";

export const OrderSIM = () => {

    return (
        <section className={s.order}>
            <h2 className={s.title}>Закажите SIM-карту</h2>
            <p className={s.descr}>Для того что бы у вас работали пакеты интернета в разных странах вам необходимо
                приобрести
                фирменную SIM-карту от Glonass Mobile. Она ничем не уступает по функциональности, её можно встроить
                в любое устройство с SIM-слотом.
            </p>
            <button className='cabinet-later'>Заказать позже<FarrowIcon/></button>
            <OrderSIMForm/>
        </section>
    )
}
