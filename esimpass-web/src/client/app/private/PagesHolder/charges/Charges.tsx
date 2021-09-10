import * as React from 'react';
import s from './Charges.module.scss';
import { Container } from '../../components/container/Container';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { MoreIcon, PadIcon, WatchIcon } from '../../../components/icons';
import { Tables } from './Tables/Tables';
import { TransactionDetails } from './TransactionDetails/TransactionDetails';
import { Details } from './Details/Details';
import { Notification } from '../../../components/notification/Notification';
import { Empty } from './Empty/Empty';

const items = [
    {
        name: 'Все транзакции',
        icon: <MoreIcon />,
        type: 'all',
    },
    {
        name: 'Ксюха (iPad Pro)',
        icon: <PadIcon />,
        type: 'user-1',
    },
    {
        name: 'Ксюха (Galaxy Watch Plus)',
        icon: <WatchIcon />,
        type: 'user-1-2',
    },
];

const years = [
    {
        name: 'Все даты',
        type: 'all-years',
    },
    {
        name: '2000',
        type: 'year',
    },
    {
        name: '2001',
        type: 'year',
    },
];

export const Charges = () => {
    const [type, setType] = React.useState(null);
    const [details, setDetailsOpen] = React.useState(false);
    const [transaction, setTransactionOpen] = React.useState(false);

    const detailsToggle = () => {
        setDetailsOpen(true);
        setTransactionOpen(false);
    }

    const transactionToggle = () => {
        setTransactionOpen(true);
        setDetailsOpen(false);
    }

    return (
        <section className={s.charges}>
            <Container>
                <h2 className={s.title}>История расходов</h2>
                {/*Если нет расходов - показать только Empty иначе все остальные компоненты */}
                {/*<Empty/>*/}
                <div className={s.top}>
                    <Dropdown
                        className={s.deviceDropdown}
                        title={'Выберите устройство'}
                        items={items}
                        getType={setType}
                    />
                    <Dropdown
                        className={s.yearDropdown}
                        title={'Выберите год'}
                        items={years}
                        getType={setType}
                    />
                    <button
                        className={`btn-reset ${s.details}`}
                        type='button'
                        onClick={transactionToggle}
                    >
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='8.99935' cy='9.00033' r='7.33333' stroke='#262626' strokeWidth='2' />
                            <path d='M9 5.66699V9.66699L10.6667 11.3337' stroke='#262626' strokeWidth='2'
                                  strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        Детальная история
                    </button>
                </div>
                <Tables toggle={detailsToggle}/>
                <Details toggle={setDetailsOpen} isOpen={details}/>
                <TransactionDetails isOpen={transaction} toggle={setTransactionOpen} />
                {/*Notification - тоаст с текстом внутри, передавать просто текст*/}
                <Notification active={true}>Теперь вам осталось подключить устройство! На вашу почту мы выслали инструкцию по подключению.</Notification>
            </Container>
        </section>
    );
};
