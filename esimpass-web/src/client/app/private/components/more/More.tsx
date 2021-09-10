import s from './More.module.scss';
import { MoreIcon } from '../../../components/icons';
import * as React from 'react';

interface MoreModel {
    getOptions?: any,
    getDisable?: any,
    getDelete?: any
}

export const More = (props: MoreModel) => {

    const [moreStatus, setMoreStatus] = React.useState(false);

    return (
        <div className={s.options}>
            <button className={`${s.more} more-btn`}
                    type='button'
                    onClick={() => setMoreStatus(!moreStatus)}
            >
                <MoreIcon />
            </button>
            <ul  className={`list-reset ${s.optionsList} ${moreStatus ? s.active : ''}`}>
                <li>
                    <button
                        onClick={() => {
                            setMoreStatus(false);
                            props.getOptions(true);
                        }}
                        className={s.option} type='button'>
                        Редактировать устройство
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setMoreStatus(false);
                            props.getDisable(true);
                        }}
                        className={s.option} type='button'>
                        Отключить устройство
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setMoreStatus(false);
                            props.getDelete(true);
                        }}
                        className={s.option} type='button'>
                        Удалить устройство
                    </button>
                </li>
            </ul>
            <div onClick={() => setMoreStatus(false)} className={`${s.closeTrigger} ${moreStatus ? s.active : ''}`}/>
        </div>
    );
};
