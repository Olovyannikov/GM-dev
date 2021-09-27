import React from "react";
import s from "./Partners.module.scss";
import {Button} from "../../../components/button/Button";
import {ContentWrapper} from '../common/contentWrapper/ContentWrapper';

export const Partners: React.FC = () => {

    const content = (
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
    )

    return (
        <ContentWrapper
            title="Сотрудничество с Глонасс Мобайл"
            headerClassName={s.header}
            className={s.partners}
        >
            {content}
        </ContentWrapper>
    )
}
