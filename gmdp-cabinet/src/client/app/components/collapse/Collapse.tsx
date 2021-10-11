import s from './Collapse.module.scss';
import { useRef, useState } from 'react';
import { ICollapseProps } from './ICollapseProps';
import cn from 'classnames';
import sprite from '../../../resources/img/sprite/sprite.svg';

export const Collapse = ({
                             children,
                             contentWrapperClassName,
                             collapseWrapperClassName,
                             isOpen = false,
                             label,
                             className,
                         }: ICollapseProps) => {
    const [isActive, setIsActive] = useState(isOpen);
    const parentRef = useRef<HTMLDivElement>();

    return (
        <div className={cn(s.collapse, collapseWrapperClassName, isActive ? s.active : '')}>
            <button className={cn(s.toggle, className, isActive ? s.open : '')}
                    type='button'
                    disabled={!children}
                    onClick={() => setIsActive(!isActive)}
            >
                {label}
                <svg className={s.chevron} width={24} height={24}>
                    <use href={`${sprite.src}#chevron`} />
                </svg>
            </button>
            <div
                className={cn(s.contentWrapper, contentWrapperClassName)}
                ref={parentRef}
                style={
                    isActive && parentRef.current ? {
                        height: `${parentRef.current.scrollHeight}px`,
                    } : {
                        height: 0,
                    }
                }
            >
                {children}
            </div>
        </div>
    );
};
