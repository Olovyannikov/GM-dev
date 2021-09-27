import * as React from 'react';

import s from './Auth.module.scss';
import {Registration} from "./registration/Registration";
import {Login} from "./login/Login";
import {ContentWrapper} from './../common/contentWrapper/ContentWrapper'

export const Auth: React.FC = () => {

    const tabs = [
        'Регистрация',
        'Уже есть eSIM/SIM'
    ];

    const [selectedItem, setSelectedItem] = React.useState('Регистрация');

    const handleItemClick = (id: any) => {
        if (selectedItem != id) {
            setSelectedItem(id);
        }
    }

    const renderTabs = () => {
        if (selectedItem === 'Регистрация') return <Registration/>
        else return <Login/>
    }

    const navs = (
        <div className={s.navs}>
            <ul className={`${s.tabs}`}>
                {tabs.map(tab => (
                        <li key={tab}
                            className={`${s.tab} ${selectedItem === tab ? s.active : ''}`}>
                            <button onClick={() => handleItemClick(tab)} type={'button'}>
                                {tab}
                            </button>
                        </li>
                    )
                )}
            </ul>
        </div> 
    )

    return (
        <ContentWrapper
            title="Войти в аккаунт"
            closeIconLabel="Вернуться на главную"
            headerClassName={s.header}
            containerClassName={s.container}
            className={s.auth}
            navigation={navs}
        >
            {renderTabs()} 
        </ContentWrapper>
    );
}
