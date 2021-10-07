import s from './AboutMenu.module.scss';
import Link from 'next/link';
import sprite from '../../../../../resources/img/sprite/sprite.svg';
import { Collapse } from '../../../collapse/Collapse';
import cn from 'classnames';


export const AboutMenu = () => {
    return (
        <>
            <li className={s.item}>
                <Collapse collapseWrapperClassName={s.wrapper}
                          contentWrapperClassName={s.content}
                          className={s.toggle} label={'О компании'} isOpen={false}
                >
                    <ul className={cn(s.list, s.about)}>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Контакты</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Инвесторам</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Стратегия</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Партнерам</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Поддержка</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Техническая поддержка</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Обратная связь</a>
                            </Link>
                        </li>
                    </ul>
                </Collapse>
            </li>
        </>
    )
}
