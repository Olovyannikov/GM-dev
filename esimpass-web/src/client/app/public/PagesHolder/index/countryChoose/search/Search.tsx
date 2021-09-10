import * as React from 'react';

import {Preloader} from 'app/components/icons';
import s from '../CountryChoose.module.scss';
import {CountryList} from '../countryList/CountryList';
import {ListRatesResponse} from 'generated/proto.web';
import {nothingToNull} from 'utils';

interface SearchProps {
    loaded?: boolean;
    rates?: ListRatesResponse.SuccessModel.RateModel[];
    selected?: (rate: ListRatesResponse.SuccessModel.RateModel) => void;
    filteredRates?: ListRatesResponse.SuccessModel.RateModel[]
    setFilteredRates: React.Dispatch<React.SetStateAction<ListRatesResponse.SuccessModel.RateModel[]>>
    toggle?: () => void;
}

export const Search = (props: SearchProps) => {

    const [inputValue, setInputValue] = React.useState<string>('');

    React.useEffect(() => {

        const filter = nothingToNull(inputValue)

        if (filter != null) {
            props.setFilteredRates(filteredRates => filteredRates = props.rates
                .filter(rate => rate.countryName.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) >= 0)
            )
        } else {
            props.setFilteredRates(filteredRates => filteredRates = props.rates)
        }

    }, [inputValue, props.rates]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(value => value = e.target.value);

    return (
        <div>
            <input className={`input ${s.search}`} type="search" value={inputValue} onChange={handleOnChange}
                   placeholder={'Найти страну'}/>
            <div className={s.main}>
                <h5 className={s.startLetter}>A</h5>
                {props.loaded ? <Preloader/> : <CountryList toggle={props.toggle} selected={props.selected}
                                                            rates={props.filteredRates ? props.filteredRates : props.rates}/>}
            </div>
        </div>
    )
}
