import React from 'react';
import {Chevron} from '../icons';
import s from './Accordion.module.scss';

interface AccrodionModel {
    children?: any;
    active?: boolean;
    title?: string;
    className?: string;
}

export const Accordion = (props: AccrodionModel) => {

    const [active, setActive] = React.useState(false);
    const contentRef = React.useRef(null);

    React.useEffect(() => {
        contentRef.current.style.maxHeight = active ? `100vh` : '0'
    }, [contentRef, active]);

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <div className={`${s.wrapper} ${props.className ? props.className : ''}`}>
            <button className={active ? `${s.accordion} ${s.active}` : `${s.accordion}`}
                    onClick={toggleActive}>
                <p className={s.title}>{props.title}</p>
                <Chevron/>
            </button>

            <div ref={contentRef} className={s.content}>
                {props.children}
            </div>
        </div>
    )
}
