import s from './NewQuestionModal.module.scss';
import {Modal} from '../../../../../components/modal/Modal';
import {MoreIcon, QuestionIcon, CarIcon, InfoIcon, ProfileGrayIcon, CardIcon} from '../../../../../components/icons';
import {Button} from '../../../../../components/button/Button';
import React from 'react';

const questionsItems = [
    {
        icon: <ProfileGrayIcon/>,
        text: 'Проблемы с аккаунтом'
    },
    {
        icon: <CardIcon/>,
        text: 'Проблемы с оплатой'
    },
    {
        icon: <CarIcon/>,
        text: 'Проблемы с доставкой'
    },
    {
        icon: <QuestionIcon/>,
        text: 'Вопрос по услугам и тарифам'
    },
    {
        icon: <InfoIcon/>,
        text: 'Ошибки в сервисе'
    },
    {
        icon: <MoreIcon/>,
        text: 'Другое'
    },
]

interface NewQuestionModalModel {
    active?: boolean;
    setActive?: any;
}

export const NewQuestionModal = (props: NewQuestionModalModel) => {

    const [isActive, setActive] = React.useState(-1);

    return (
        <Modal className={s.newQuestion} active={props.active} setActive={() => props.setActive(false)}>
            <div className={s.top}>
                <h3>Выбери тему вопроса</h3>
                <button className={`${s.burger} ${s.active}`} aria-label="Закрыть модальное окно"/>
            </div>
            <ul className={s.questions}>
                {questionsItems.map((item, id) => (
                    <li key={id}>
                        <button type="button" onClick={() => setActive(id)} className={isActive === id ? s.active : ''}>
                            {item.icon}
                            {item.text}
                        </button>
                    </li>
                ))}
            </ul>
            <Button className={s.next}>Перейти в чат</Button>
        </Modal>
    )
}
