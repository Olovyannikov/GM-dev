import s from '../Auth.module.scss';

import * as React from "react";
import * as rx from "rxjs";
import * as ro from "rxjs/operators";

import {Container} from "../../../../components/container/Container";
import {convertEndingOfNoun, Logger, nothingToNull, waitForClose} from "../../../../../utils";
import {RegisterWebRequest, RegisterWebResponse} from "../../../../../generated/proto.web";
import {DefaultStateComponent} from "../../../../../codebase/types";
import {CONNECTION} from "../../../../../Connection";
import {STORAGE} from "../../../../../StorageAdapter";
import {Button} from "../../../../components/button/Button";
import { STATE_API } from 'redux/StateApi';

interface RegistrationStateModel extends DefaultStateComponent {
    success?: boolean;
}

export const Registration = () => {
    const logger = new Logger('register');

    const closedSubject = waitForClose();

    const [state, setState] = React.useState<RegistrationStateModel>({})

    const emailInput = React.useRef<HTMLInputElement>();
    const passwordInput = React.useRef<HTMLInputElement>();
    const passwordRepeatInput = React.useRef<HTMLInputElement>();

    const minPasswordLength = 6;

    const handleRegister = () => {
        setState((prev: any) => ({
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
        setState((prev: any) => ({
            ...prev,
            success: true,
            inProgress: false,
        }))
    }

    const handleInvalidPasswordResponse = () => {
        if (passwordInput.current.value.length < 6 || passwordRepeatInput.current.value.length < 6) {
            handlePlainError('Пароль меньше шести символов');
        } else {
            setState((prev: any) => ({
                ...prev,
                inProgress: false,
            }))
        }
    }

    const handleToManyErrorAttemptsResponse = (response: RegisterWebResponse) => {
        const secondsToWait = Math.round(parseInt(response.tooManyAttempts) / 1000)

        rx.interval(1000)
            .pipe(
                ro.map(r => secondsToWait - r),
                ro.tap(secondsToWait => {

                    if (secondsToWait > 0) {
                        setState((prev: any) => ({
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
        setState((prev: any) => ({
            ...prev,
            inProgress: false,
            error,
            success: null
        }))
    }

    const createRegisterRequest = (): RegisterWebRequest => ({
        email: emailInput.current.value,
        password: passwordInput.current.value,
    });

    const handleEventEnter = (e: React.KeyboardEvent) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            if (document.activeElement === emailInput.current) {
                passwordInput.current.focus()
            } else if (document.activeElement === passwordInput.current) {
                passwordRepeatInput.current.focus()
            } else if (document.activeElement === passwordRepeatInput.current) {
                handleRegister()
            }
        }
    }

    const showError = () => {
        if (state.error) {
            return <p style={{marginBottom: '1rem'}} className={'error'}>{state.error}</p>
        }
    }

    return (
        <Container className={s.container}>
            <p className={s.descr}>
                На данный email мы отправим письмо с QR-кодом для автоматической настройки
                виртуальной eSIM на Вашем устройстве. Так же мы создадим создадим Личный кабинет, привязанный к
                указанному e-mail.
            </p>
            <form autoComplete="off" aria-autocomplete="none" onKeyUp={handleEventEnter} className={s.form}>
                <label className={`label full`}>
                    <input autoComplete="off" ref={emailInput} type="text" className={`input ${state.error ? 'invalid' : ''}`}
                           required
                    />
                    <span>Электронная почта</span>
                </label>
                <label className={`label full`}>
                    <input ref={passwordInput} type="password"
                           className={`input ${state.error ? 'invalid' : ''}`}
                           required
                    />
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
                <Button size={'large'} disabled={state.inProgress} onClick={handleRegister}>Создать
                    аккаунт</Button>
            </form>
        </Container>
    )
}

