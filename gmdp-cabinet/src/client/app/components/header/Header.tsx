import s from './Header.module.scss';
import cn from 'classnames';
import { Burger } from '../burger/Burger';
import { Container } from '../container/Container';
import React, { useEffect, useState } from 'react';
import sprite from '../../../resources/img/sprite/sprite.svg';
import avatar from '../../../resources/img/user-avatar.jpg'
import Link from 'next/link';
import { Button } from '../button/Button';
import Image from 'next/image';

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
            <Container width={'full'} className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <svg width={133} height={30}>
                            <use href={`${sprite.src}#glonass`} />
                        </svg>
                    </div>
                    <Link href="/profile">
                        <a className={s.user}>
                            <span>Name</span>
                            <Image src={avatar} aria-hidden={true}/>
                        </a>
                    </Link>
                </div>
            </Container>
        </header>
    );
};
