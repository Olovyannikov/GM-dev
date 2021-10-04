import { Collapse } from '../../../collapse/Collapse';
import cn from 'classnames';
import s from './PrivateMenu.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import sprite from '../../../../../resources/img/sprite/sprite.svg';

export const PrivateMenu = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.screen.availWidth < 992) {
            setIsMobile(true);
        }
    }, []);

    return (
        <>
            <li>
                <Collapse
                    collapseWrapperClassName={s.wrapper}
                    contentWrapperClassName={s.content}
                    className={s.toggle} label={'Частным клиентам'} isOpen={isMobile}>
                    <ul className={cn(s.list, s.private)}>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Тарифы</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Скачать приложение</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Перейти со своим номером</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Услуги и опции</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Акции</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Пополнение</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Смартфоны и гаджеты</a>
                            </Link>
                        </li>
                    </ul>
                </Collapse>
            </li>
            <li>
                <Link href="/business">
                    <a className={s.businessLink}>
                        Бизнесу
                        <svg width="20" height="20" className={s.business}>
                            <use href={`${sprite.src}#link-arrow`}/>
                        </svg>
                    </a>
                </Link>
            </li>
        </>
    );

};
