import s from './Container.module.scss';
import cn from 'classnames';
import { IContainerProps } from './IContainerProps';

export const Container = ({className, children}: IContainerProps) => {
    return (
        <div className={cn(s.container, className)}>{children}</div>
    )
}
