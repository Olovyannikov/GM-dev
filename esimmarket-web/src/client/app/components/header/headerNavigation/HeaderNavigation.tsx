import s from './HeaderNavigation.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Collapse } from '../../collapse/Collapse';

export const HeaderNavigation = () => {

    const router = useRouter();

    const navigationRender = () => {
        if (router.pathname === '/business') {
            return (
                <>
                    <li>
                        <Link href={'/'}><a>Частным клиентам</a></Link>
                    </li>
                    <li>
                        <Collapse label={'Бизнесу'} isOpen={true}>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>Тарифы для бизнеса</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Решения для бизнеса</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Перейти со своим номером</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Программа лояльности</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Обслуживание</a>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                </>
            );
        }

        return (
            <>
                <li>
                    <Collapse label={'Частным клиентам'} isOpen={true}>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>Тарифы</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Перейти со своим номером</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Услуги и опции</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Акции</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Пополнение</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Смартфоны и гаджеты</a>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>
                <li>
                    <Link href={'/business'}><a>Бизнесу</a></Link>
                </li>
            </>
        );
    };

    return (
        <nav>
            <ul>
                {navigationRender()}
            </ul>
        </nav>
    );
};
