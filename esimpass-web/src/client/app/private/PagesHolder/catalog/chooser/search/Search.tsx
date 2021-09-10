import * as React from 'react';
import s from './Search.module.scss';

interface SearchModel {
    handleSearch: any;
    value: string;
}

export const Search = (props: SearchModel) => {

    return (
        <section className={s.search}>
            <input value={props.value} onChange={props.handleSearch} placeholder={"Найти страну"} type="search" className="input"/>
        </section>
    )
}
