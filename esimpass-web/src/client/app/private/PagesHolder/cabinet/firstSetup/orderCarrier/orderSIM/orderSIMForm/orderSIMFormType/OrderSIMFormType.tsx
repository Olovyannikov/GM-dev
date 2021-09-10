import s from './OrderSIMFormType.module.scss';
import boxberry from '../../../../../../../../../resources/img/boxberry.png';
import Image from 'next/image';

interface OrderFormTypeModel {
    type?: string | null;
}

export const OrderFormType = (props: OrderFormTypeModel) => {

    if (props.type === 'delivery') {
        return <Delivery/>
    } else if (props.type === 'pick') {
        return <Pick/>
    } else if (props.type === 'abroad') {
        return <Abroad/>
    } else if (props.type === 'fast') {
        return <Fast/>
    } else {
        return <></>
    }
}

const Delivery = () => {
    return (
        <div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Имя получателя</span>
                </label>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Фамилия получателя</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Город/населённый пункт</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={`${s.label} ${s.full}`}>
                    <input required={true} className={'input'} type="text"/>
                    <span>Улица</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required={true} className={'input'} type="text"/>
                    <span>Дом/корпус</span>
                </label>
                <label className={s.label}>
                    <input required={true} className={'input'} type="text"/>
                    <span>Квартира</span>
                </label>
            </div>
            <div className={s.groupCol}>
                <label className={s.label}>
                    <input required={true} className={'input'} type="text"/>
                    <span>Номер телефона</span>
                </label>
                <p className={s.descr}>Оставьте ваш номер. После оформления и оплаты заказа наш менеджер свяжется с
                    вами,
                    для уточнения
                    информации</p>
            </div>

        </div>
    )
}

const Pick = () => {
    return (
        (
            <div>
                <div className={s.groupCol}>
                    <div className={s.image}>
                        <Image src={boxberry} aria-hidden={'true'}/>
                    </div>
                    <button type={'button'} className={s.button}>Смотреть пункты выдачи</button>
                </div>
                <div>
                    <div className={s.group}>
                        <label className={s.label}>
                            <input required className={'input'} type="text"/>
                            <span>Имя получателя</span>
                        </label>
                        <label className={s.label}>
                            <input required className={'input'} type="text"/>
                            <span>Фамилия получателя</span>
                        </label>
                    </div>
                    <div className={s.group}>
                        <label className={s.label}>
                            <input required className={'input'} type="text"/>
                            <span>Город/населённый пункт</span>
                        </label>
                        <label className={s.label}>
                            <input required className={`input ${s.dislaimeredInput}`} type="text"/>
                            <span>Номер телефона</span>
                            <p className={`${s.descr}`}>Оставьте ваш номер. После оформления и оплаты заказа наш
                                менеджер
                                свяжется с вами, для уточнения информации</p>
                        </label>
                    </div>
                </div>
            </div>
        )
    )
}

const Abroad = () => {
    return (
        <div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Имя получателя</span>
                </label>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Фамилия получателя</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Город/населённый пункт</span>
                </label>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Индекс</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={`label full`}>
                    <input required className={'input'} type="text"/>
                    <span>Улица</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Дом/корпус</span>
                </label>
                <label className={'label'}>
                    <input required className={'input'} type="text"/>
                    <span>Квартира</span>
                </label>
            </div>
        </div>
    )
}

const Fast = () => {
    return (
        <div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Имя получателя</span>
                </label>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Фамилия получателя</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={'label full'}>
                    <input required className={'input'} type="text"/>
                    <span>Улица</span>
                </label>
            </div>
            <div className={s.group}>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Дом/корпус</span>
                </label>
                <label className={s.label}>
                    <input required className={'input'} type="text"/>
                    <span>Квартира</span>
                </label>
            </div>
        </div>
    )
}
