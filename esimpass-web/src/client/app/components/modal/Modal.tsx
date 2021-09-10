import s from './Modal.module.scss';
import {useEffect} from 'react';

interface ModalModel {
    active?: boolean,
    setActive?: any,
    children?: any,
    className?: string,
    wrapperClassName?: string
}

export const Modal = (props: ModalModel) => {

    useEffect(() => {
        document.body.style.overflow = props.active ?
            'hidden' : ''
    });

    return (
        <div className={`${s.modal} ${props.active ? s.active : ''}`} onClick={() => props.setActive(false)}>
            <div className={`${s.content} ${props.active ? s.active : ''} ${props.className}`}
                 onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    active: false,
    className: '',
    wrapperClassName: ''
}
