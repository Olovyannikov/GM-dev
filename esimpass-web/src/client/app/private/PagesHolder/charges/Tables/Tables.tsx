import s from './Tables.module.scss';
import * as React from 'react';
import { CalendarImage } from '../../../../components/icons';

interface TablesModel {
    toggle?: any;
}

export const Tables = (props: TablesModel) => {
    return (
        <div className={s.tables}>
            <table>
                <caption>Сентябрь 2021</caption>
                <tbody>
                <tr onClick={() => props.toggle(true)}>
                    <td className={s.date}>24 сентября, 12:48</td>
                    <td className={s.type}>Пополнение баланса</td>
                    <td className={s.about}>Вы купили тариф "Mama Mia"</td>
                    <td className={`${s.transaction} ${s.positive}`}>+10 000 ₽</td>
                </tr>
                <tr onClick={() => props.toggle(true)}>
                    <td className={s.date}>12 сентября, 12:48</td>
                    <td className={s.type}>Пополнение баланса</td>
                    <td className={s.about}>Вы купили тариф "Mama Mia"</td>
                    <td className={`${s.transaction} ${s.negative}`}>-2300 ₽</td>
                </tr>
                </tbody>
            </table>
            <table>
                <caption>Сентябрь 2021</caption>
                <tbody>
                <tr onClick={() => props.toggle(true)}>
                    <td className={s.date}>24 сентября, 12:48</td>
                    <td className={s.type}>Пополнение баланса</td>
                    <td className={s.about}>Вы купили тариф "Mama Mia"</td>
                    <td className={`${s.transaction} ${s.positive}`}>+10 000 ₽</td>
                </tr>
                <tr onClick={() => props.toggle(true)}>
                    <td className={s.date}>12 сентября, 12:48</td>
                    <td className={s.type}>Пополнение баланса</td>
                    <td className={s.about}>Вы купили тариф "Mama Mia"</td>
                    <td className={`${s.transaction} ${s.negative}`}>-2300 ₽</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}
