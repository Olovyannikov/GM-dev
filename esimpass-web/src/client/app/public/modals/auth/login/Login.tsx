import s from '../Auth.module.scss';

import * as React from "react";
import * as rx from "rxjs";
import * as ro from "rxjs/operators";

import {convertEndingOfNoun, Logger, nothingToNull, waitForClose} from "../../../../../utils";
import {LoginRequest, LoginResponse, RegisterWebRequest, RegisterWebResponse} from "../../../../../generated/proto.web";
import {DefaultStateComponent} from "../../../../../codebase/types";
import {CONNECTION} from "../../../../../Connection";
import {STORAGE} from "../../../../../StorageAdapter";
import {STATE_API} from "../../../../../redux/StateApi";
import {Container} from "../../../../components/container/Container";
import {Button} from "../../../../components/button/Button";
import {useRouter} from "next/router";


export const Login = () => {

    const logger = new Logger('LoginForm');

    const closedSubject = waitForClose();

    const router = useRouter();

    const [state, setState] = React.useState<DefaultStateComponent>({});

    const emailInput = React.useRef<HTMLInputElement>();
    const passwordInput = React.useRef<HTMLInputElement>();

    const showError = () => {
        if (state.error) {
            return <p className="error mb-4">{state.error}</p>
        }
    }

    const handleLogin = () => {

        setState(prev => ({
            ...prev,
            error: null,
            inProgress: true,
        }))

        if (checkValidEmail()) {
            CONNECTION.login(createLoginRequest())
                .pipe(
                    ro.tap(parseLoginResponse),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe("Error logging in"))
        } else {
            handlePlainError('Введите корректную почту')
        }
    }

    const checkValidEmail = () => {
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/;
        if (regExpEmail.test(emailInput.current.value)) {
            return true
        }
    }

    const parseLoginResponse = (response: LoginResponse) => {

        if (response.invalidEmailOrPassword) {
            handlePlainError('Неправильная почта или пароль')
        } else if (response.tooManyErrorAttempts) {
            handleToManyErrorAttemptsResponse(response)
        } else if (response.success) {
            STORAGE.storeEmail(emailInput.current.value)
            handleSuccessResponse(response)
        }
    }

    const handleSuccessResponse = (response: LoginResponse) => {
        STORAGE.setToken(response.success.token);
        router.push('/cabinet');
        STATE_API.hideModal()
    }

    const handleEventEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (document.activeElement === emailInput.current) {
                passwordInput.current.focus()
            } else if (document.activeElement === passwordInput.current) {
                handleLogin()
            }
        }
    }

    const handleToManyErrorAttemptsResponse = (response: LoginResponse) => {
        let secondsToWait = Math.round(parseInt(response.tooManyErrorAttempts) / 1000)

        rx.interval(1000)
            .pipe(
                ro.map(r => secondsToWait - r),
                ro.tap(secondsToWait => {
                    if (secondsToWait > 0) {
                        handlePlainError(`Повторить можно через ${secondsToWait} ${convertEndingOfNoun(secondsToWait)}`)
                        setState(prev => ({
                            ...prev,
                            inProgress: true,
                        }));
                    } else {
                        handlePlainError(null)
                    }
                }),
                ro.takeWhile(secondsToWait => secondsToWait > 0),
                ro.takeUntil(closedSubject)
            )
            .subscribe(logger.rx.subscribe("Error logging in"))
    }

    const handlePlainError = (error: string) => {
        setState(prev => ({
            ...prev,
            inProgress: false,
            error
        }))
    }

    const createLoginRequest = (): LoginRequest => ({
        email: emailInput.current.value,
        password: passwordInput.current.value
    })

    const handleRestorePassword = () => STATE_API.showPublicWizard('passwordRestore');


    return (
        <Container className={s.container}>
            <div onKeyUp={handleEventEnter} className={s.form}>
                <label className={`label full`}>
                    <input className={`input ${state.error ? 'invalid' : ''}`} ref={emailInput} type="text"
                           disabled={state.inProgress} required/>
                    <span>Электронная почта</span>
                </label>
                <label className={`label full`}>
                    <input className={`input ${state.error ? 'invalid' : ''}`} ref={passwordInput} type="password"
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
}
