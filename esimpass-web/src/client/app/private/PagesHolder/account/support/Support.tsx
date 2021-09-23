import s from './Support.module.scss';
import {CommentsIcon, FaCommentsIcon, BackArr} from '../../../../components/icons';
import React from 'react';
import {EmptyScreen} from './emptyScreen/EmptyScreen';
import {NewQuestionModal} from './newQuestionModal/NewQuestionModal';
import {QuestionsTable} from './questionsTable/QuestionsTable';
import { SidebarChat } from './sidebarChat/SidebarChat';

interface SupportModel {
    back?: any;
}

export const Support = (props: SupportModel) => {

    const [isQuestionModalActive, setQuestionModalActive] = React.useState(false);
    const [isEmptyPage, setEmptyPage] = React.useState(false);
    const [isSupportChatActive, setSupportChat] = React.useState(false);

    return (
        <section className={s.support}>
            <div className={s.top}>
                <button className={s.back} type="button" onClick={() => props.back(false)}>
                    <BackArr stroke={'#000'}/>
                    Служба поддержки
                </button>
                {isEmptyPage ? '' :
                    <button className={s.newQuestionBtn} onClick={() => setQuestionModalActive(true)}>
                        <FaCommentsIcon/>
                        Задать вопрос
                    </button>
                }
            </div>
            {isEmptyPage ? <EmptyScreen setModal={setQuestionModalActive}/> : <QuestionsTable trigger={setSupportChat}/>}
            <NewQuestionModal active={isQuestionModalActive} setActive={setQuestionModalActive}/>
            <SidebarChat trigger={setSupportChat} isActive={isSupportChatActive}/>
        </section>
    )
}
