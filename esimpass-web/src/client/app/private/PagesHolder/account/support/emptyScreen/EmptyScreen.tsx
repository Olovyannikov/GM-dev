import s from './EmptyScreen.module.scss';
import {CommentsIcon} from '../../../../../components/icons';
import {Button} from '../../../../../components/button/Button';

interface EmptyScreenModel {
    setModal?: any;
}

export const EmptyScreen = (props: EmptyScreenModel) => {
    return (
        <div className={s.firstQuestion}>
            <CommentsIcon/>
            <h2>Задай нам вопрос!</h2>
            <p>Если у вас есть какие-то вопросы, вы можете задать их
                нашей службе поддержки. Мы постараемся решить вашу проблему в кротчайший срок </p>
            <Button onClick={() => props.setModal(true)}>Задать вопрос</Button>
        </div>
    )
}
