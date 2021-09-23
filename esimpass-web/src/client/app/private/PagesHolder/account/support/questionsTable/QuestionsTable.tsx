import s from './QuestionsTable.module.scss';
import {CardIcon} from '../../../../../components/icons';

interface QuestionsTableModel {
    trigger?: any;
}

export const QuestionsTable = (props: QuestionsTableModel) => {
    return (
        <table className={s.table}>
            <caption>
                Сентябрь 2021
            </caption>
            <tbody>
            <tr onClick={() => props.trigger(true)}>
                <td className={s.date}>24 сентября, 12:48</td>
                <td className={s.icon}><CardIcon/></td>
                <td className={s.problem}>
                    <strong>Проблемы с аккаунтом</strong>
                    <small>Сообщений: 4</small>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
