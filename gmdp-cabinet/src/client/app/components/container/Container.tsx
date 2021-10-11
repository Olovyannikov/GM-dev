import s from './Container.module.scss';
import cn from 'classnames';
import { IContainerProps } from './IContainerProps';

export const Container = ({className, children, width}: IContainerProps) => {
    return (
        <div className={cn(s.container, className, width ? s.full : '')}>{children}</div>
    )
}
