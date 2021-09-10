import * as React from 'react';

import {useRouter} from "next/router";
import {Cabinet} from "./cabinet/Cabinet";
import { Header } from '../components/header/Header';
import { Charges } from './charges/Charges';
import { Catalog } from './catalog/Catalog';
import { Account } from './account/Account';
import { Notification } from 'app/components/notification/Notification';

export const PagesHolder = () => {

    const router = useRouter();

    const doRender = () => {

        if (router.asPath === '/cabinet') {
            return <Cabinet/>
        }
        else if (router.asPath === '/cabinet/charges') {
            return <Charges />
        }
        else if (router.asPath === '/cabinet/catalog') {
            return <Catalog />
        }
        else if (router.asPath === '/cabinet/account') {
            return <Account />
        }
        else return null

    }

    return (
        <>
            <Header />
            {/* <Notification /> в будущем понадобится для показа уведомлений, можно через редакс показывать состояние */}
            {doRender()}
        </>
    );
}
