import s from './HeaderNavigation.module.scss';
import { useRouter } from 'next/router';
import { PrivateMenu } from './privateMenu/PrivateMenu';
import { BusinessMenu } from './businessMenu/BusinessMenu';

export const HeaderNavigation = () => {

    const router = useRouter();

    const navigationRender = () => {
        if (router.pathname === '/business') return <BusinessMenu />
        else return <PrivateMenu />
    };

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {navigationRender()}
            </ul>
        </nav>
    );
}
