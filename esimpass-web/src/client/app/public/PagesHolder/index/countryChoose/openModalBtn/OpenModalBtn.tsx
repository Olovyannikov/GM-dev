import * as React from 'react';

import { Chevron, Preloader } from 'app/components/icons';
import s from '../CountryChoose.module.scss';

interface OpenModalBtnProps {
    toggleModal: Function;
    title? : any;
}

export const OpenModalBtn = (props : OpenModalBtnProps) => {

    return (
        <button onClick={() => props.toggleModal()} className={`btn-reset ${s.countryBtn}`}>
            <span className={s.text}>
                <span className={props.title ? s.btnTitle : s.withoutTitle}>Выберите страну</span>
                <p className={s.countryName}>{props.title}</p>
            </span>
        <Chevron />
    </button>
    )
}
