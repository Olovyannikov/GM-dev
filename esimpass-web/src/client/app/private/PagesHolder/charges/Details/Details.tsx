import s from './Details.module.scss';

interface DetailsModel {
    isOpen?: boolean;
    toggle?: any;
}

export const Details = (props: DetailsModel) => {
    return (
        <aside className={`${s.aside} ${props.isOpen ? s.active : ''}`}>
            <button
                className={s.close}
                type='button'
                aria-label='Закрыть боковое меню'
                onClick={() => props.toggle(false)}
            />
            <h3 className={s.title}>Оплата прошла успешно!</h3>
            <p className={s.descr}>
                Все ваши транзакции хранятся в разделе расходов. Информацию о вашем заказе вы получите на вашу
                почту.</p>

            <div className={s.infobox}>
                <h4>Дата и время</h4>
                <p>02.08.2021</p>
            </div>
            <div className={s.infobox}>
                <h4>Номер заказа:</h4>
                <p>5787 3341</p>
            </div>
            <div className={s.infobox}>
                <h4>Товар:</h4>
                <p>Glonass SIM + 890₽ на балансе, 1 шт.</p>
            </div>
            <div className={s.infobox}>
                <h4>Способ оплаты:</h4>
                <p>Картой, Сбербанк</p>
            </div>
            <div className={s.infobox}>
                <h4>Сумма платежа:</h4>
                <p>560₽</p>
            </div>
            <div className={s.infobox}>
                <h4>Комиссия</h4>
                <p>0₽</p>
            </div>
            <div className={s.infobox}>
                <h4>Почта для чека</h4>
                <p>witetoadd@gmail.com</p>
            </div>
        </aside>
    );
};
