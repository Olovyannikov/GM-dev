import * as React from 'react';

import {Restore} from "app/public/modals/restore/Restore";
import {DownloadApp} from './downloadApp/DownloadApp';
import {State} from 'redux/State';
import {connect} from 'react-redux';
import {STATE_API} from 'redux/StateApi';
import s from './Modals.module.scss';
import {Partners} from "./partners/Partners";
import { CheckDeviceModal } from './checkDevice/CheckDeviceModal';
import {Auth} from "./auth/Auth";

const ModalsImpl = ({mode}: ReturnType<typeof mapStateToProps>) => {

    React.useEffect(() => {
        mode ?
            document.body.classList.add('overlay') :
            document.body.classList.remove('overlay');
    }, [mode]);

    return (
        <div className={mode ? s.Modals : ''} onClick={STATE_API.hideModal}>
            {mode == 'auth' && <Auth />}
            {mode == 'passwordRestore' && <Restore />}            
            {mode == 'downloadApp' && <DownloadApp />}
            {mode == 'checkDevice' && <CheckDeviceModal />}
            {mode == 'partners' && <Partners />}
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    mode: state.publicWizard
})

export const Modals = connect(mapStateToProps)(ModalsImpl)
