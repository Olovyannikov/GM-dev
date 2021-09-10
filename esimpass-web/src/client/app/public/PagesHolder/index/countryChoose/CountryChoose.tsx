import * as React from 'react';
import * as ro from 'rxjs/operators';

import s from './CountryChoose.module.scss';
import {Container} from "../../../../components/container/Container";
import {Ticket} from "../../../../components/icons";
import {Modal} from "./modal/Modal";
import {Logger, nothingToNull, scrollToTop, waitForClose} from 'utils';
import {CountryRate} from './countryRate/CountryRate';
import {CountryList} from './countryList/CountryList';
import {CONNECTION} from 'Connection';
import {DefaultStateComponent} from 'codebase/types';
import {ListRatesResponse} from 'generated/proto.web';
import {Search} from './search/Search';
import {OpenModalBtn} from './openModalBtn/OpenModalBtn';

export const CountryChoose = () => {

    const logger = new Logger('CountryChoose');

    const closedSubject = waitForClose();

    const [state, setState] = React.useState<DefaultStateComponent>({});
    const [rates, setRates] = React.useState<ListRatesResponse.SuccessModel.RateModel[]>([]);

    const [country, setCountry] = React.useState<ListRatesResponse.SuccessModel.RateModel>({});
    const [filteredRates, setFilteredRates] = React.useState<ListRatesResponse.SuccessModel.RateModel[]>();

    /* Modal start */

    const [isActive, setActive] = React.useState<boolean>(false);
    const toggleModal = () => {
        setActive(!isActive);
        scrollToTop();
        document.body.style.overflow = isActive ? '' : 'hidden';
        isActive ? document.getElementById('country').scrollIntoView({behavior: "smooth"}) : '';
    }

    /* Modal end */

    React.useEffect(() => {

        setState(prev => ({
            ...prev,
            inProgress: true,
            error: null,
        }))

        CONNECTION.listRates({})
            .pipe(
                ro.tap(response => {
                    if (response.success) {
                        setRates(prev => prev = response.success.rates)
                    }
                }),
                ro.tap(() => setState(prev => ({
                    ...prev,
                    inProgress: false,
                }))),
                ro.takeUntil(closedSubject)
            )
            .subscribe(logger.rx.subscribe('Error receiving list rates'))

    }, [])

    const handleChoosedCountry = () =>  {
        if (country.countryId) return country
        else if (rates.length) return rates[0]
        else return null
    }

    return (
        <section id="country" className={s.country}>
            <Container className={s.container}>

                <Ticket />

                <div className={s.desktopList}>
                    <Search filteredRates={filteredRates} setFilteredRates={setFilteredRates} selected={setCountry}
                            loaded={state.inProgress} rates={rates}/>

                </div>

                <OpenModalBtn title={country.countryName} toggleModal={toggleModal}/>
                <CountryRate rate={handleChoosedCountry()}/>

            </Container>

            <Modal
                toggleModal={toggleModal}
                isActive={isActive}
                countryList={<CountryList selected={setCountry} rates={filteredRates ? filteredRates : rates}/>}
                search={<Search toggle={toggleModal} filteredRates={filteredRates} setFilteredRates={setFilteredRates} selected={setCountry}
                                loaded={state.inProgress} rates={rates}/>}
            />

        </section>
    )
}


