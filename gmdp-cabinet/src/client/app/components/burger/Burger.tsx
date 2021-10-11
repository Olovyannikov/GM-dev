import s from './Burger.module.scss';
import {IBurgerProps} from './IBurgerProps';
import cn from 'classnames';

export const Burger = ({isActive = false, className, onClick}: IBurgerProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className={cn(className, s.burger, isActive ? s.active : '')}
            type="button">
            {!isActive ? <span className={s.burger__line}/> : ''}
        </button>
    )
}
