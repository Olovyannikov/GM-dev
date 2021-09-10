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

const ModalsImpl = (props: ReturnType<typeof mapStateToProps>) => {

    React.useEffect(() => {
        props.mode ?
            document.body.classList.add('overlay') :
            document.body.classList.remove('overlay');
    }, [props.mode]);

    return (
        <div className={props.mode ? s.Modals : ''} onClick={STATE_API.hideModal}>
            <Auth mode={props.mode}/>
            <Restore mode={props.mode}/>
            <DownloadApp mode={props.mode}/>
            <CheckDeviceModal mode={props.mode}/>
            <Partners mode={props.mode}/>
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    mode: state.publicWizard
})

export const Modals = connect(mapStateToProps)(ModalsImpl)
