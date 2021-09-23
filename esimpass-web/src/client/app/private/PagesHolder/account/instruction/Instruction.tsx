import s from './Instruction.module.scss';
import {BackArr} from '../../../../components/icons';

interface InstructionModel {
    back?: any;
}

export const Instruction = (props: InstructionModel) => {
    return (
        <div className={s.instruction}>
            <button className={s.back} type="button" onClick={() => props.back(false)}>
                <BackArr stroke={'#000'}/>
                Инструкция по активации
            </button>
            <div className={s.disclaimer}>
                <h5>Важно</h5>
                <ol>
                    <li>QR-код можно использовать только один раз</li>
                    <li>eSIM-карта предназначена для использования только за пределами РФ.</li>
                    <li>Не все смартфоны поддерживают технологию eSIM. Уточните у производителя поддерживает ли ваша
                        модель мобильного устройства функцию eSIM.
                    </li>
                </ol>
            </div>
            <div className={s.category}>
                <span className={s.counter}>1</span>
                <div className={s.content}>
                    <div className={s.block}>
                        <h4 className={s.title}>
                            Завершение настроек по QR-коду
                        </h4>
                        <p>После подключения на Вашу почту придет QR-код. Также Вы его можете увидеть в разделе
                            устройства.</p>
                        <p>Активируйте eSIM, отсканировав QR-код камерой вашего смартфона.</p>
                        <p>Следуйте инструкции на экране.</p>
                    </div>
                    <div className={s.block}>
                        <h4 className={s.title}>
                            Самостоятельная настройка
                        </h4>
                        <p>Если камера на смартфоне не работает, используйте эту инструкцию активации:</p>
                        <p>«Настройки» → «Мобильная сеть» → «Управление SIM-картами» → «SIM 2» → Выбрать тип
                            «eSIM-карта»→ «Добавить eSIM-карту» → следуйте инструкции на экране.</p>
                    </div>
                </div>
            </div>

            <div className={s.category}>
                <span className={s.counter}>2</span>
                <div className={s.content}>
                    <div className={s.block}>
                        <h4 className={s.title}>
                            По прибытию в страну
                        </h4>
                        <p>По прибытию в страну, убедитесь, что передача сети сотовых данных включена с eSIM-тарифа.</p>
                        <p>«Настройки» → «Мобильная сеть» → «Управление SIM-картами» → «SIM 2» → «Настройки eSIM-карт»→
                            «Включить»</p>
                    </div>
                    <div className={s.block}>
                        <h4 className={s.title}>
                            Режим Data Roaming
                        </h4>
                        <p>Убедитесь, что режим data roaming активирован на вашем устройстве.</p>
                        <p>«Настройки» → «Мобильная сеть» → «Управление SIM-картами» → «Моб. Передача данных» → «SIM2» →
                            Интернет-роуминг включен</p>
                    </div>
                    <div className={s.block}>
                        <h4 className={s.title}>
                            Если интернета нет
                        </h4>
                        <p>Если интернет на eSIM не заработал, перезагрузите ваше устройство.</p>
                        <p>Если проблема сохраняется, необходимо прописать точку доступа (APN) в настройках
                            устройства: </p>
                        <p>«Настройки» → «Мобильная сеть» → «Управление SIM-картами» → «Моб. Передача данных» → «SIM2» →
                            «Имена точек доступа APN» → Прописать APN: globaldata</p>
                        <p>Остальне параметры по умолчанию.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
