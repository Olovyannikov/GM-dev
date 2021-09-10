import * as React from 'react';

import {State} from 'redux/State';
import {connect} from 'react-redux';
import {STATE_API} from 'redux/StateApi';
import { ActivationCarrier } from './activationCarrier/ActivationCarrier';

const ModalsImpl = (props: ReturnType<typeof mapStateToProps>) => {

    React.useEffect(() => {
        props.mode ?
            document.body.classList.add('overlay') :
            document.body.classList.remove('overlay');
    }, [props.mode]);

    return (
        <div className={''} onClick={STATE_API.hideModal}>
            <ActivationCarrier />
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    mode: state.privateWizard
})

export const Modals = connect(mapStateToProps)(ModalsImpl)
