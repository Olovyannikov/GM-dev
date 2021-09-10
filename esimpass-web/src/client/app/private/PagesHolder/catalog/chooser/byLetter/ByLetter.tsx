import * as React from 'react';
import s from './ByLetter.module.scss';
import { Preloader } from '../../../../../components/icons';

interface ByLetterModel {
    array: any;
    toggle: any;
    setFlag?: any;
}

export const ByLetter = (props: ByLetterModel) => {

    let countryList = Object.entries(props.array).sort();

    return (
        <div className={s.ByLetter}>
            {countryList.length > 1 ? countryList.map(country => (
                <div key={country[0]} className={s.group}>
                    <h3 className={s.groupHeader}>{country[0]}</h3>
                    <ul className={s.groupList}>
                        {country[1]['children'].map((cities: any) => (
                            <li key={cities.countryId} title={cities.countryName} className={s.groupListItem}>
                                <button data-id={cities.countryId} onClick={(e: any) => {
                                    props.toggle(e);
                                    props.setFlag(e);
                                }} type={'button'}>{cities.countryName}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )) : <Preloader />}
        </div>
    );
};
