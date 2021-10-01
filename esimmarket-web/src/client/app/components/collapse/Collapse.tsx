import s from './Collapse.module.scss';
import { useState } from 'react';
import { ICollapseProps } from './ICollapseProps';
import cn from 'classnames';

export const Collapse = ({ children, isOpen, label, className }: ICollapseProps) => {
    const [isActive, setIsActive] = useState(isOpen);

    return (
        <div className={s.collapse}>
            <button className={cn(s.toggle, className)}
                    type='button'
                    onClick={() => setIsActive(!isActive)}
            >
                {label}
            </button>
            {isActive && <div className={s.content}>{children}</div>}
        </div>
    );
};
