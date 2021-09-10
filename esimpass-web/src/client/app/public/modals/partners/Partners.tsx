import s from "./Partners.module.scss";
import {Button} from "../../../components/button/Button";
import { STATE_API } from "redux/StateApi";

interface PartnersModel {
    mode?: string;
}

export const Partners = (props: PartnersModel) => {
    return (
        <div onClick={(e) => e.stopPropagation()} className={`${s.aboutModal} ${props.mode === 'partners' ? s.active : ''}`}>
            <div className={s.top}>
                <div className={s.preheader}>
                    <h2>Сотрудничество с Глонасс Мобайл</h2>
                </div>
                <button onClick={STATE_API.hideModal} className={`${s.burger} ${s.active}`}/>
            </div>
            <div className={s.main}>
                <p>Заполните форму и мы свяжемся с Вами в ближайшее время!</p>
                <form>
                    <label className={`label full ${s.label}`}>
                        <input className={`input`} type="text" required/>
                        <span>Как к вам обращаться?</span>
                    </label>
                    <label className={`label full ${s.label}`}>
                        <input className={`input`} type="text" required/>
                        <span>Название вашей компании</span>
                    </label>
                    <label className={`label full ${s.label}`}>
                        <input className={`input`} type="email" required/>
                        <span>Электронная почта</span>
                    </label>
                    <label className={`label full ${s.label}`}>
                        <input className={`input`} type="tel" required/>
                        <span>Телефон</span>
                    </label>
                    <textarea className={`textarea`}  placeholder={'Дополнение (необязательно)'}/>
                    <Button size={'large'} disabled={true}>Отправить</Button>
                </form>
            </div>
        </div>
    )
}
