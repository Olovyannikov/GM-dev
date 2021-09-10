import * as React from 'react';

import {ListRatesResponse} from 'generated/proto.web';
import s from '../CountryChoose.module.scss';

interface CountryListProps {
    rates?: ListRatesResponse.SuccessModel.RateModel[];
    selected?: (rate: ListRatesResponse.SuccessModel.RateModel) => void;
    toggle?: () => void;
}

export const CountryList = (props: CountryListProps) => {

    const [id, setId] = React.useState<string>();

    return (
        <ul className={`list-reset ${s.countryList}`}>
            {props.rates && props.rates.map((rate) =>
                <li key={rate.countryId} className={`${rate.countryId == id ? s.active : ''}`}>
                    <button className={`btn-reset`} onClick={() => {
                        props.selected(rate);
                        setId(rate.countryId);
                        props.toggle;
                    }}>{rate.countryName}</button>
                </li>)}
        </ul>
    )
}
