import s from './Toast.module.scss';
import { AlertIcon } from '../../../components/icons';

interface ToastModel {
    children?: any;
}

export const Toast = (props: ToastModel) => {
    return (
        <div className={s.toast}>
            <AlertIcon/>
            {props.children}
        </div>
    )
}
