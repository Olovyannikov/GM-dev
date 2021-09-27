import * as React from 'react';
import {STATE_API} from 'redux/StateApi';
import s from './Header.module.scss';
import {IHeaderProps} from './IHeader';


export const Header: React.FC<IHeaderProps> = (props) => {

    const {title, closeIconLabel, className, leftBtn} = props;

    return (
        <div className={`${s.header} ${className? className : ''}`}>
            {leftBtn}
            <h2 className={s.title}>
                {title}
            </h2>
            <button onClick={STATE_API.hideModal} className={`${s.burger} ${s.active}`} {...(closeIconLabel ? { 'aria-label': closeIconLabel} : {})}/>
        </div>                
    )
}
