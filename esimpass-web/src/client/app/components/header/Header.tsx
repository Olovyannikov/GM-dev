import * as React from 'react';

import { EIcon, LoginIcon, Logo } from '../icons';
import s from './Header.module.scss';
import Link from 'next/link';
import { Container } from '../container/Container';

import { STATE_API } from 'redux/StateApi';
import { STORAGE } from 'StorageAdapter';
import { useRouter } from 'next/router';

export const Header = () => {

    const [isActive, setActive] = React.useState<string>('');

    const router = useRouter();

    React.useEffect(() => {

        const handleResizeListener = () => {
            if (window.screen.availWidth < 992) {
                setActive('');
                document.body.classList.remove('menu-active');
                document.body.style.overflow = 'auto';
            }
        };

        const handleClickListener = (e: any) => {
            if (e.target.classList.contains('overlay')) {
                document.body.classList.remove('overlay');
            }
        };

        window.addEventListener('resize', handleResizeListener);

        document.body.addEventListener('click', handleClickListener);

        return () => {
            window.removeEventListener('resize', handleResizeListener);
            document.body.removeEventListener('click', handleClickListener);
        };
    });

    const toggleBurger = () => {
        if (isActive === 'burger--active') {
            setActive('');
            document.body.style.overflow = 'auto';
            document.body.classList.remove('menu-active');
        } else {
            setActive('burger--active');
            document.body.style.overflowY = 'hidden';
            document.body.classList.add('menu-active');
        }
    };

    const handleOpenCabinetPage = () => {

        const token = STORAGE.getToken();

        if (token) {
            router.push('cabinet');
        } else {
            STATE_API.showPublicWizard('auth');
        }

    };

    return (
        <>
            <header className={s.header}>
                <Container className={s.container}>
                    <div className={s.left}>
                        <Link href={'/'}>
                            <a onClick={() => {
                                setActive('');
                                document.body.classList.remove('menu-active');
                            }} className={s.logo}>
                                <Logo />
                            </a>
                        </Link>
                    </div>
                    <div className={`${s.menu} ${isActive ? s.active : ''}`}>
                        <ul className={`list-reset ${s.links}`}>
                            <li><Link href='#'><a onClick={() => {
                                setActive('');
                                document.body.classList.remove('menu-active');
                            }} className={s.active}>Тарифы</a></Link></li>
                            <li><Link href='#'><a onClick={() => {
                                setActive('');
                                document.body.classList.remove('menu-active');
                            }}>Как подключить?</a></Link></li>
                            <li><Link href='#'><a onClick={() => {
                                setActive('');
                                document.body.classList.remove('menu-active');
                            }}>Особенности E-SIM</a></Link></li>
                            <li className={s.last}><Link href='/about'><a onClick={() => {
                                setActive('');
                                document.body.classList.remove('menu-active');
                            }}>О нас</a></Link></li>
                        </ul>
                        <div className={s.about}>
                            <button onClick={() => STATE_API.showPublicWizard('downloadApp')} className={'btn-reset'}>
                                <EIcon />eSIM App
                            </button>
                            <a onClick={handleOpenCabinetPage}>Личный кабинет<LoginIcon />
                            </a>
                        </div>
                    </div>
                    <div className={s.right}>
                        <button onClick={toggleBurger} className={`${s.burger} ${isActive ? s.active : ''}`}>
                            <span className={s.burger__line} />
                        </button>
                    </div>
                </Container>
            </header>
        </>
    );
};
