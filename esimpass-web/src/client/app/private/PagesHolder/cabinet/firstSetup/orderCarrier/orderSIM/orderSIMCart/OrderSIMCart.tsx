import React from "react";
import s from './OrderSIMCart.module.scss';

import simcart from '../../../../../../../../resources/img/svg/simcart.svg';
import {Button} from "../../../../../../../components/button/Button";
import {MinusIcon, PlusIcon} from "../../../../../../../components/icons";
import Image from "next/image";

export const OrderCart = () => {

    const [count, setCount] = React.useState(1);

    return (
        <section className={s.cart}>
            <div className={s.wrapper}>
                <div className={s.image}>
                    <Image width={40} height={60} src={simcart} alt={'Изображение SIM-карты'}/>
                </div>
                <div className={s.description}>
                    <h4>Glonass SIM + 890₽ на балансе</h4>
                    <div className={s.controls}>
                        <button type={'button'}
                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                className={s.arrow}>
                            <MinusIcon/>
                        </button>
                        <span className={s.counter}>{count > 0 ? count : 1}</span>
                        <button type={'button'}
                                onClick={() => setCount(count + 1)}
                                className={s.arrow}>
                            <PlusIcon/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.cartInfo}>
                <p>Сумма заказа: <span>{count > 0 ? 890 * count : 890}₽</span></p>
                <Button size={'small'} disabled={false}>Заказать</Button>
            </div>
        </section>
    )
}
