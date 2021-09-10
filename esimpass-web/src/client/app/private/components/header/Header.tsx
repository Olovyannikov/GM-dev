import s from './Header.module.scss';
import {Container} from "../container/Container";
import {Logo, LogoutIcon} from "../../../components/icons";
import Link from "next/link";
import {useRouter} from 'next/router';
import {STORAGE} from 'StorageAdapter';
import {useState} from 'react';
import React from 'react';

const routes = [
    {
        route: '/cabinet',
        text: 'Моя eSIM'
    },
    {
        route: '/cabinet/catalog',
        text: 'Каталог'
    },
    {
        route: '/cabinet/charges',
        text: 'Расходы'
    },
    {
        route: '/cabinet/account',
        text: 'Аккаунт'
    },
]

export const Header = () => {

    const [selectedRoute, setSelectedRoute] = useState('/cabinet');

    const router = useRouter();

    React.useEffect(() => {
        setSelectedRoute(location.pathname);
    });

    const logout = () => {
        router.push('/');
        STORAGE.clear();
    }

    return (
        <header className={s.header}>
            <Container className={s.container}>
                <Link href={'/'}>
                    <a><Logo/></a>
                </Link>
                <nav className={s.nav}>
                    <ul className={`list-reset`}>
                        {routes.map(route => (
                            <li onClick={() => setSelectedRoute(route.route)} key={route.route}>
                                <Link href={route.route}>
                                    <a
                                       className={route.route === selectedRoute ? s.active : ''}>
                                        {route.text}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button onClick={logout} className={`btn-reset ${s.loginBtn}`}>
                    <span>winetoadd@</span>
                    <LogoutIcon/>
                </button>
            </Container>
        </header>
    )
}
