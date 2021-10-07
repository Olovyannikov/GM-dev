import Link from 'next/link';
import s from '../HeaderNavigation.module.scss';
import { Collapse } from '../../../collapse/Collapse';

export const BusinessMenu = () => {
    return (
        <>
            <li>
                <Link href={'/'}><a className={s.toggle}>Частным клиентам</a></Link>
            </li>
            <li>
                <Collapse className={s.toggle} label={'Бизнесу'} isOpen={true} collapseWrapperClassName={s.wrapper}
                          contentWrapperClassName={s.content}>
                    <ul className={s.list}>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Тарифы для бизнеса</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Решения для бизнеса</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Перейти со своим номером</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Программа лояльности</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a className={s.link}>Обслуживание</a>
                            </Link>
                        </li>
                    </ul>
                </Collapse>
            </li>
        </>
    );
};
