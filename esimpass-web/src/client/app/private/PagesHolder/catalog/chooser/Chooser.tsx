import * as React from 'react';
import * as ro from 'rxjs/operators';

import s from './Chooser.module.scss';
import { DefaultStateComponent } from 'codebase/types';
import { ListRatesResponse } from 'generated/proto.web';
import { Logger, waitForClose } from 'utils';
import { ByLetter } from './byLetter/ByLetter';
import { Search } from './search/Search';
import { CONNECTION } from 'Connection';
import { Container } from '../../../components/container/Container';
import { Country } from './country/Country';

interface Rates extends ListRatesResponse.SuccessModel.RateModel {
    letter?: string;
}

export const Chooser = () => {

    const logger = new Logger('Chooser');

    const closedSubject = waitForClose();

    const [rates, setRates] = React.useState<ListRatesResponse.SuccessModel.RateModel[] | any>(null);
    const [state, setState] = React.useState<DefaultStateComponent>({});
    const [inputValue, setInputValue] = React.useState<string>('');
    const [filteredRates, setFilteredRates] = React.useState<ListRatesResponse.SuccessModel.RateModel[]>();
    const [countryModal, setCountryModal] = React.useState(false);
    const [countryName, setCountryName] = React.useState('');
    const [countryFlag, setCountryFlag] = React.useState('');

    const handleSetCountry = (e: any) => {
        setCountryName(e.target.textContent);
    };

    const handleSetFlag = (e: any) => {
        setCountryFlag(e.target.getAttribute('data-id'));
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(value => value = e.target.value);

    React.useEffect(() => {

        setState(prev => ({
            ...prev,
            inProgress: true,
        }));

        CONNECTION.listRates({})
            .pipe(
                ro.tap(response => {
                    if (response.success) {
                        const filteredCountries = response.success.rates.reduce((acc, e) => {
                            const group = e.countryName[0];
                            if (!acc[group]) acc[group] = { group, children: [e] };
                            else acc[group].children.push(e);
                            return acc;
                        }, {});

                        setRates((prev: ListRatesResponse.SuccessModel.RateModel) => prev = filteredCountries);
                    }

                    setState((prev: any) => ({
                        ...prev,
                        inProgress: false,
                    }));
                }),
                ro.takeUntil(closedSubject),
            )
            .subscribe(logger.rx.subscribe('Error in chooser rates catalog'));

    }, []);

    console.log(countryName);

    return (
        <section className={s.Chooser}>
            <Container className={s.container}>
                <Search value={inputValue} handleSearch={handleOnChange} />
                <ByLetter
                    setFlag={handleSetFlag}
                    toggle={(e: any) => {
                        handleSetCountry(e);
                        setCountryModal(true);
                    }} array={rates ? rates : {}} />
                <Country
                    flag={countryFlag}
                    countryName={countryName}
                    toggle={() => {
                        setCountryModal(!countryModal);
                    }} isActive={countryModal} />
            </Container>
        </section>
    );
};

