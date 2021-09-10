import s from "../DeviceActivation.module.scss";
import {Button} from "../../../../../../../../components/button/Button";
import * as React from "react";

export const Sim = () => {
    return (
        <div className={`${s.tab} ${s.active}`}>
            <div className={s.registration}>
                <h5>Введите данные SIM</h5>
                <p>На внутреннем вкладыше упаковки с SIM-картой есть данные для активации.</p>
                <form className={s.form}>
                    <label className={`label`}>
                        <input required className={`input`} type="text"/>
                        <span>SIM ID</span>
                    </label>
                    <label className={`label`}>
                        <input required className={`input`} type="password"/>
                        <span>Пароль</span>
                    </label>
                    <Button size={'small'}>Активировать</Button>
                </form>
            </div>
        </div>
    )
}
