import React from 'react';
import s from './SidebarChat.module.scss';
import {CardIcon, AttachIcon, SendIcon, CommentsIcon} from '../../../../../components/icons';
import {Sidebar} from 'app/private/components/sidebar/Sidebar';
import { Chat } from './chat/Chat';

interface SidebarChatModel {
    isActive?: boolean;
    trigger?: any;
}

export const SidebarChat = (props: SidebarChatModel) => {
    const [isDisabled, setDisabled] = React.useState(true);
    const [isEmpty, setEmpty] = React.useState(false);
    const textareaRef = React.useRef<HTMLTextAreaElement>();

    const disabledToggle = (e: any) => {
        if (e.target.value !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <Sidebar active={props.isActive} trigger={() => props.trigger(false)} position={'right'}>
            <span className={s.date}>Создано: 24.09.2021</span>
            <div className={s.content}>
                <div className={s.top}>
                    <div className={s.icon}><CardIcon/></div>
                    <h3 className={s.title}>Проблемы с аккаунтом</h3>
                </div>
                {isEmpty ?
                    <div className={s.empty}>
                        <CommentsIcon/>
                        <p>Опишите вашу проблему</p>
                    </div>
                    : <Chat/>}
                <div className={s.footer}>
                    <label className={s.attach}>
                        <input className={'visually-hidden'} type="file"/>
                        <AttachIcon/>
                    </label>
                    <textarea ref={textareaRef} className={s.textarea} placeholder="Сообщение"
                              onInput={disabledToggle}/>
                    <button disabled={isDisabled} className={s.send}>
                        <SendIcon/>
                    </button>
                </div>
            </div>
        </Sidebar>
    )
}
