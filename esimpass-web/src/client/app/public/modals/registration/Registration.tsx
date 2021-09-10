import * as React from 'react';
import * as ro from 'rxjs/operators';
import * as rx from 'rxjs';

import s from './Registration.module.scss';
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import {convertEndingOfNoun, Logger, nothingToNull, waitForClose} from 'utils';
import {RegisterWebRequest, RegisterWebResponse} from 'generated/proto.web';
import {DefaultStateComponent} from 'codebase/types';
import {CONNECTION} from 'Connection';
import {STORAGE} from 'StorageAdapter';
import {STATE_API} from 'redux/StateApi';
import {BackArr} from "../../../components/icons";

interface RegistrationStateModel extends DefaultStateComponent {
    success?: boolean;
}

interface RegistrationModel {
    mode?: string;
}

export const Registration = (props: RegistrationModel) => {

    const menuItems = [
        'Регистрация',
        'Уже есть eSIM/SIM'
    ];

    const [items, setItem] = React.useState(menuItems);
    const [selectedItem, setSelectedItem] = React.useState('Регистрация');

    const handleItemClick = (id: any) => {
        if (selectedItem != id) {
            setSelectedItem(id);
        }
    }

    const logger = new Logger('Registration');

    const closedSubject = waitForClose();

    const [state, setState] = React.useState<RegistrationStateModel>({});

    const emailInput = React.useRef<HTMLInputElement>();
    const passwordInput = React.useRef<HTMLInputElement>();
    const passwordRepeatInput = React.useRef<HTMLInputElement>();

    const minPasswordLength = 6;

    const handleRegister = () => {
        setState(prev => ({
            ...prev,
            inProgress: true,
            error: null,
            success: null
        }))

        if (checkPasswords()) {
            CONNECTION.registerWeb(createRegisterRequest())
                .pipe(
                    ro.tap(parseRegisterResponse),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe('Error register in'))
        }
    }

    const checkPasswords = () => {

        if (nothingToNull(passwordInput.current.value) && nothingToNull(passwordRepeatInput.current.value)) {

            if (passwordLengthMoreThanNum(minPasswordLength)) {

                if (passwordInput.current.value === passwordRepeatInput.current.value) {
                    return true
                } else {
                    handlePlainError('Пароли не совпадают!');
                }
            } else {
                handlePlainError(`Пароль меньше ${minPasswordLength} символов `)
            }
        } else {
            handlePlainError('Заполните все поля!')
        }
    }

    const passwordLengthMoreThanNum = (length: number) => {
        if (passwordInput.current.value.length >= length || passwordRepeatInput.current.value.length >= length) {
            return true
        }
    }

    const parseRegisterResponse = (response: RegisterWebResponse) => {

        if (response.emailAlreadyUsed) {
            handlePlainError('Аккаунт уже используется')
        } else if (response.invalidEmail) {
            handlePlainError('Неправильная почта')
        } else if (response.invalidPassword) {
            handleInvalidPasswordResponse();
        } else if (response.tooManyAttempts) {
            handleToManyErrorAttemptsResponse(response)
        } else if (response.expired) {
            handleRegister()
        } else if (response.success) {
            handleSuccessResponse()
        }
    }

    const handleSuccessResponse = () => {
        STORAGE.storeEmail(emailInput.current.value);
        setState(prev => ({
            ...prev,
            success: true,
            inProgress: false,
        }))
    }

    const handleInvalidPasswordResponse = () => {
        if (passwordInput.current.value.length < 6 || passwordRepeatInput.current.value.length < 6) {
            handlePlainError('Пароль меньше шести символов');
        } else {
            setState(prev => ({
                ...prev,
                inProgress: false,
            }))
        }
    }

    const handleToManyErrorAttemptsResponse = (response: RegisterWebResponse) => {
        let secondsToWait = Math.round(parseInt(response.tooManyAttempts) / 1000)

        rx.interval(1000)
            .pipe(
                ro.map(r => secondsToWait - r),
                ro.tap(secondsToWait => {

                    if (secondsToWait > 0) {
                        setState(prev => ({
                            ...prev,
                            error: `Повторить можно через ${secondsToWait} ${convertEndingOfNoun(secondsToWait)}`
                        }));
                    } else {
                        handlePlainError(null)
                    }
                }),
                ro.takeWhile(secondsToWait => secondsToWait > 0),
                ro.takeUntil(closedSubject)
            )
            .subscribe(logger.rx.subscribe("Error register in"))
    }

    const handlePlainError = (error: string) => {
        setState(prev => ({
            ...prev,
            inProgress: false,
            error,
            success: null
        }))
    }

    const createRegisterRequest = (): RegisterWebRequest => ({
        email: emailInput.current.value,
        password: passwordInput.current.value,
    })

    const handleEventEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (document.activeElement === emailInput.current) {
                passwordInput.current.focus();
            } else if (document.activeElement === passwordInput.current) {
                passwordRepeatInput.current.focus();
            } else if (document.activeElement === passwordRepeatInput.current) {
                handleRegister()
            }
        }
    }

    const handleLogin = () => STATE_API.showPublicWizard('auth');

    const handleRestorePassword = () => STATE_API.showPublicWizard('passwordRestore');

    const showError = () => {
        if (state.error) {
            return <p className="error mb-4">{state.error}</p>
        }
    }

    const renderTab = () => {
        if (selectedItem !== 'Регистрация') {
            return (
                <Container className={s.container}>
                    <div onKeyUp={handleEventEnter} className={s.form}>
                        <label className={`label full`}>
                            <input className={`input ${state.error ? 'invalid' : ''}`} ref={emailInput} type="text"
                                   disabled={state.inProgress} required/>
                            <span>Электронная почта или SIM ID</span>
                        </label>
                        <label className={`label full`}>
                            <input className={`input ${state.error ? 'invalid' : ''}`} ref={passwordInput}
                                   type="password"
                                   disabled={state.inProgress} required/>
                            <span>Ведите пароль</span>
                        </label>
                        {showError()}
                        <Button onClick={handleLogin} size={'large'} disabled={state.inProgress} color={'primary'}>Войти
                            в аккаунт</Button>
                        <Button onClick={handleRestorePassword} color={'link'}>Забыли пароль?</Button>
                    </div>
                </Container>
            )
        } else {
            return (
                <Container className={s.container}>
                    <p className={s.descr}>
                        {state.success ?
                            `Вам на почту отправлено письмо для подтверждения регистрации`
                            :
                            `На данный email мы отправим письмо с QR-кодом для автоматической настройки
                    виртуальной eSIM на Вашем устройстве. Так же мы создадим создадим Личный кабинет, привязанный к
                    указанному e-mail.`
                        }
                    </p>
                    <div onKeyUp={handleEventEnter} className={s.form}>
                        <label className={`label full`}>
                            <input ref={emailInput} type="text" className={`input ${state.error ? 'invalid' : ''}`}
                                   required
                            />
                            <span>Электронная почта</span>
                        </label>
                        <label className={`label full`}>
                            <input ref={passwordInput} type="password"
                                   className={`input ${state.error ? 'invalid' : ''}`}
                                   required/>
                            <span>Придумайте пароль</span>
                        </label>
                        <label className={`label full`}>
                            <input ref={passwordRepeatInput} type="password"
                                   className={`input ${state.error ? 'invalid' : ''}`}
                                   required
                            />
                            <span>Повторите пароль</span>
                        </label>
                        {showError()}
                        {state.success ?
                            <Button onClick={handleRegister}>Отправить еще раз</Button>
                            :
                            <Button size={'large'} disabled={state.inProgress} onClick={handleRegister}>Создать аккаунт</Button>}
                    </div>
                </Container>
            )
        }
    }
    return (
        <section onClick={(e) => e.stopPropagation()}
                 className={`${s.registration} ${props.mode === 'register' ? s.active : ''}`}>
            <div className={s.top}>
                <h2 className={s.title}>
                    Войти в аккаунт
                </h2>
                <button onClick={STATE_API.hideModal} className={`${s.burger} ${s.active}`}
                        aria-label={'Вернуться на главную'}/>
                <ul className={`${s.tabs}`}>
                    {menuItems.map(item => (
                            <li key={item}
                                className={`${s.tab} ${selectedItem === item ? s.active : ''}`}>
                                <button onClick={() => handleItemClick(item)} type={'button'}>
                                    {item}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>
            {renderTab()}
        </section>
    )
}
