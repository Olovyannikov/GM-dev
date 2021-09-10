import * as React from 'react';
import s from './Empty.module.scss';
import { CalendarImage } from '../../../../components/icons';

export const Empty = () => {
    return (
        <div className={s.empty}>
            <CalendarImage/>
            <h2>У вас пока нет истории расходов</h2>
            <p>В этом разделе вы можете отслеживать историю пополнений баланса и покупки тарифов</p>
        </div>
    )
}
