import React from 'react';
import s from './CheckDeviceModal.module.scss';
import {ModalDesktop} from "./modalDesktop/ModalDesktop";
import {ModalMobile} from "./modalMobile/ModalMobile";
import {ContentWrapper} from '../common/contentWrapper/ContentWrapper';

export const CheckDeviceModal: React.FC = () => {

    return (
        <ContentWrapper
            headerClassName={s.header}
            title="eSIM и мое устройство совместимы?"
            className={s.deviceModal}
        >
            <ModalMobile/>
            <ModalDesktop/>
        </ContentWrapper>
    );
}
