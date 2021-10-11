import s from './Sidebar.module.scss';
import sprite from '../../../resources/img/sprite/sprite.svg';
import Link from 'next/link';
import { Collapse } from '../collapse/Collapse';
import { ISidebarProps } from './ISidebarProps';
import cn from 'classnames';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Sidebar = ({ isActive = true }: ISidebarProps) => {

    const [open, setOpen] = useState(true);

    const router = useRouter();

    return (
        <>
            <aside className={cn(s.sidebar, 'sidebar', open ? `${s.active} sidebar-active` : '')}>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li>
                            <Link href='#'>
                                <a>Главная</a>
                            </Link>
                            <svg className={s.menuIcon} width={16} height={16}>
                                <use href={`${sprite.src}#main`} />
                            </svg>
                        </li>
                        <li>
                            <Collapse collapseWrapperClassName={s.collapse} contentWrapperClassName={s.collapseContent}
                                      isOpen={false} label={'Подключение'}>
                                <ul className={s.submenu}>
                                    <li className={router.pathname == '/cabinet' ? s.active : ''}><Link href={"#"}><a>Подключить профиль</a></Link></li>
                                    <li><Link href={"#"}><a>История подключений</a></Link></li>
                                </ul>
                            </Collapse>
                            <svg className={s.menuIcon} width={16} height={16}>
                                <use href={`${sprite.src}#connect`} />
                            </svg>
                        </li>
                        <li>
                            <Collapse collapseWrapperClassName={s.collapse} contentWrapperClassName={s.collapseContent}
                                      isOpen={false} label={'Устройства eSIM'}>

                            </Collapse>
                            <svg className={s.menuIcon} width={16} height={16}>
                                <use href={`${sprite.src}#esim`} />
                            </svg>
                        </li>
                        <li>
                            <Collapse collapseWrapperClassName={s.collapse} contentWrapperClassName={s.collapseContent}
                                      isOpen={false} label={'Профили'}>

                            </Collapse>
                            <svg className={s.menuIcon} width={16} height={16}>
                                <use href={`${sprite.src}#profiles`} />
                            </svg>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Настройки</a>
                            </Link>
                            <svg className={s.menuIcon} width={16} height={16}>
                                <use href={`${sprite.src}#settings`} />
                            </svg>
                        </li>
                    </ul>
                </nav>
            </aside>
            <button onClick={() => setOpen(!open)} className={s.fold} type='button' aria-label='Скрыть меню'>
                <svg className={s.menuIcon} width={16} height={16}>
                    <use href={`${sprite.src}#fold`} />
                </svg>
            </button>
        </>
    );
};
