import s from './Sidebar.module.scss';
import { useState } from 'react';

interface SidebarModel {
    position?: string,
    trigger?: any,
    active?: boolean,
    children?: any;
}

export const Sidebar = (props: SidebarModel) => {

    return (
        <aside className={`${s.aside} ${props.position === 'right' ? s.right : s.left} ${props.active ? s.active : ''}`}>
            <button className={s.close} type='button' onClick={() => props.trigger(false)} />
            {props.children}
        </aside>
    );
};
