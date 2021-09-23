import s from './EmailModal.module.scss';
import {Modal} from '../../../../components/modal/Modal';
import {Button} from '../../../../components/button/Button';
import React from 'react';

interface EmailModalModel {
    active?: boolean;
    setActive?: any;
}

export const EmailModal = (props: EmailModalModel) => {

    const inputRef = React.useRef<HTMLInputElement>();
    const [isDisabled, setDisabled] = React.useState<boolean>(true);

    const validateEmail = (e: any) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        e.target.classList.remove('invalid');
        if (e.target.value.length > 0) {

            if (re.test(e.target.value.trim())) {
                e.target.classList.remove('invalid')
                setDisabled(false);
            } else {
                e.target.classList.add('invalid');
                setDisabled(true);
            }
        }
    }

    return (
        <Modal className={s.emailModal} active={props.active} setActive={() => props.setActive(false)}>
            <div className={s.top}>
                <h3>Изменить почту</h3>
                <button className={`${s.burger} ${s.active}`} aria-label="Закрыть модальное окно"
                        onClick={() => props.setActive(false)}/>
            </div>
            <div className={s.actualMail}>
                Текущая почта: <span>winetoadd@gmail.com</span>
            </div>
            <form className={s.form}>
                <label className="label full">
                    <input ref={inputRef} type="email" required className="input" onInput={validateEmail}/>
                    <span>Новая электронная почта</span>
                </label>
                <Button disabled={isDisabled}>Изменить</Button>
            </form>
        </Modal>
    )
}
