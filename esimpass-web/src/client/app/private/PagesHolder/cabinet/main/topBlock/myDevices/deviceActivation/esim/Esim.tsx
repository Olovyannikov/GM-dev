import s from "../DeviceActivation.module.scss";
import * as React from "react";

export const Esim = () => {
    return (
        <div className={`${s.tab} ${s.active}`}>
            <ol className={s.steps}>
                <li className={s.step}>
                    <h5>Зайдите на почту</h5>
                    <p>Мы отправили вам письмо с инструкцией по подключению нового устройства к вашему
                        аккаунту.</p>
                </li>
                <li className={s.step}>
                    <h5>Сканируйте QR-код вашей камерой или введите вручную</h5>
                    <p>В письме будет QR-код, который можно сканировать камерой телефона или, если камера не
                        работает, ввести вручную данные, которые указаны в инструкцие.</p>
                </li>
            </ol>
        </div>
    )
}
