import * as React from 'react';

import s from './Auth.module.scss';
import {STATE_API} from 'redux/StateApi';
import {Registration} from "./registration/Registration";
import {Login} from "./login/Login";

interface AuthModel {
    mode?: string;
}

export const Auth = (props: AuthModel) => {

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

    return (
        <section onClick={(e) => e.stopPropagation()}
                 className={`${s.auth} ${props.mode === 'auth' ? s.active : ''}`}>
            <div className={s.top}>
                <h2 className={s.title}>
                    Войти в аккаунт
                </h2>
                <button onClick={STATE_API.hideModal} className={`${s.burger} ${s.active}`}
                        aria-label={'Вернуться на главную'}/>
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
            {renderTabs()}
        </section>
    )
}
