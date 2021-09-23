import React from 'react';
import s from './PasswordModal.module.scss';
import {Modal} from '../../../../components/modal/Modal';
import {Button} from '../../../../components/button/Button';

interface PasswordModalModel {
    active?: boolean;
    setActive?: any;
}

export const PasswordModal = (props: PasswordModalModel) => {

    const newPasswordRef = React.useRef<HTMLInputElement>();
    const newPasswordRepeatRef = React.useRef<HTMLInputElement>();

    const [isError, setError] = React.useState<boolean>(false);

    const validateInput = (e: any) => {
        if (e.target.value.length < 6) {
            e.target.classList.add('invalid');
        } else {
            e.target.classList.remove('invalid');
        }
    }

    const validateNewPasswords = () => {
        newPasswordRef.current.value !== newPasswordRepeatRef.current.value ? setError(true) : setError(false)
    }

    return (
        <Modal active={props.active} setActive={props.setActive} className={s.passwordModal}>
            <div className={s.top}>
                <h3>Изменить пароль</h3>
                <button className={`${s.burger} ${s.active}`} aria-label="Закрыть модальное окно"
                        onClick={() => props.setActive(false)}/>
            </div>
            <form className={s.form}>
                <label className="label full">
                    <input onInput={validateInput} required type="password" className="input"/>
                    <span>Введите старый пароль</span>
                </label>
                <label className="label full">
                    <input ref={newPasswordRef} onInput={validateInput} required type="password" className="input"/>
                    <span>Введите новый пароль</span>
                </label>
                <label className="label full">
                    <input ref={newPasswordRepeatRef} onInput={validateInput} required type="password"
                           className="input"/>
                    <span>Повторите новый пароль</span>
                </label>
                {isError ? <p style={{marginBottom: `1rem`}} className={'error'}>Пароли не совпадают</p> : ''}
                <Button disabled onClick={validateNewPasswords}>Изменить</Button>
            </form>
        </Modal>
    )
}
