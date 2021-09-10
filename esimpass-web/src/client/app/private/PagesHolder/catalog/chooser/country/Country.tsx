import * as React from 'react';
import s from './Country.module.scss';
import { CountryCard } from './countryCard/CountryCard';
import { TariffCard } from './tariffCard/TariffCard';

interface CountryModel {
    isActive?: boolean;
    toggle?: any;
    countryName?: string;
    flag?: string;
}

export const Country = (props: CountryModel) => {

    /* При выборе страны в CountryCard активируется TariffCard, в котором видны тарифы выбраной страны */

    return (
        <section className={`${s.country} ${props.isActive ? s.active : ''}`}>
            <CountryCard
                countryName={props.countryName}
                toggle={props.toggle}
                isActive={props.toggle}
                flag={props.flag}
            />
            {/*<TariffCard/>*/}
        </section>
    );
};
