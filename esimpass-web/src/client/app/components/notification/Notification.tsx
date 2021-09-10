import * as React from 'react';
import s from './Notification.module.scss';

interface NotificationModel {
    children?: any;
    active?: boolean;
}

export const Notification = (props: NotificationModel) =>
    <div className={`${s.notification} ${props.active ? s.active : ''}`}>{props.children}</div>
