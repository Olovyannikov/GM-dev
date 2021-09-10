import s from './Preloader.module.scss';
import { PreloaderGreen } from '../../../../../../../../components/icons';
import * as React from 'react';

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <PreloaderGreen />
            <p>Покупка тарифа</p>
            <span>Подождите пожалуйста, это может занять несколько секунд.</span>
        </div>
    )
}
