import s from './OrderSIMForm.module.scss';
import {CarIcon, FlagIcon, ForwardIcon, PasteIcon} from "../../../../../../../components/icons";
import React from "react";
import {Dropdown} from "../../../../../../components/dropdown/Dropdown";
import {OrderFormType} from "./orderSIMFormType/OrderSIMFormType";
import {OrderCart} from "../orderSIMCart/OrderSIMCart";

const items = [
    {
        name: 'Доставка курьером',
        icon: <CarIcon/>,
        type: 'delivery'
    },
    {
        name: 'Самовывоз из пункта выдачи',
        icon: <FlagIcon/>,
        type: 'pick'
    },
    {
        name: 'Доставка за границу почтой России',
        icon: <PasteIcon/>,
        type: 'abroad'
    },
    {
        name: 'Доставка курьером за час (только Москва)',
        icon: <ForwardIcon/>,
        type: 'fast'
    }
];

export const OrderSIMForm = () => {
    const [type, setType] = React.useState(null);

    const getDisclaimer = () => {
        if (type) {
            return (
                <small className={s.disclaimer}>Цена и сроки доставки зависят от региона. Вы можете уточнить эту
                    информацию на следующем
                    шаге</small>
            )
        }
    }

    return (
        <form className={s.form}>
            <div className={s.block}>
                <Dropdown getType={setType} items={items}/>
                {getDisclaimer()}
                <OrderFormType type={type}/>
            </div>
            <OrderCart/>
        </form>
    )
}
