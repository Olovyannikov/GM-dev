import s from './Wrapper.module.scss';
import { IWrapperProps } from './IWrapper';

export const Wrapper = ({children}: IWrapperProps) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    )
}
