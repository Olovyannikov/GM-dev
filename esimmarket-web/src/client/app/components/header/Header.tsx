import s from './Header.module.scss';
import cn from 'classnames';
import { Burger } from '../burger/Burger';
import { Container } from '../container/Container';
import React, { useEffect, useState } from 'react';
import sprite from '../../../resources/img/sprite/sprite.svg';
import { HeaderNavigation } from './headerNavigation/HeaderNavigation';
import Link from 'next/link';

console.log(sprite);

export const Header = () => {

    const [isActiveMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.screen.availWidth > 992) {
                setActiveMenu(false);
            }
        });
    }, []);

    return (
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    {isActiveMenu ?
                        <label className={s.search}>
                            <svg width={sprite.width} height={sprite.height}>
                                <use href={`${sprite.src}#search`} />
                            </svg>
                            <input type='search' />
                        </label> :
                        <h2 className={s.logo}>eSim market</h2>
                    }
                    <Burger className={s.burger}
                            isActive={isActiveMenu}
                            onClick={() => setActiveMenu(!isActiveMenu)}
                    />
                    <div className={cn(s.nav, isActiveMenu ? s.active : '')}>
                        <Link href='/cabinet'>
                            <a>
                                <svg width='20' height='20'>
                                    <use href={`${sprite.src}#login`} />
                                </svg>
                                Личный кабинет
                                <svg width="24" height="24">
                                    <use href={`${sprite.src}#chevron`}/>
                                </svg>
                            </a>
                        </Link>
                        <HeaderNavigation />
                    </div>
                </div>
            </Container>
        </header>
    );
};
