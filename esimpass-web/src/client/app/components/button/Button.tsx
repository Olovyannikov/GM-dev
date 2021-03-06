import s from './Button.module.scss'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface ButtonModel {
    color?: string;
    size?: string;
    children?: JSX.Element | JSX.Element[] | string;
    onClick?: VoidFunction | MouseEventHandler;
    isLink?: boolean;
    href?: string;
    disabled?: boolean;
    className?: string;
    icon?: string;
}

export const Button = (props: ButtonModel) => {
    let buttonClass;

    if (props.color === 'primary') {
        buttonClass = `${s.primary}`
    } else if (props.color === 'secondary') {
        buttonClass = `${s.secondary}`
    } else if (props.color === 'text') {
        buttonClass = `${s.text}`
    } else if (props.color === 'dark') {
        buttonClass = `${s.dark}`
    } else if (props.color === 'warning') {
        buttonClass = `${s.warning}`
    }

    if (props.size === 'large') {
        buttonClass += ` ${s.large}`
    } else if (props.size === 'medium') {
        buttonClass += ` ${s.medium}`
    } else if (props.size === 'small') {
        buttonClass += ` ${s.small}`
    } else if (props.size === 'huge') {
        buttonClass += ` ${s.huge}`
    } else if (props.size === 'badge') {
        buttonClass += ` ${s.badge}`
    }

    if (props.icon === 'left') {
        buttonClass += ` ${s.leftIcon}`;
    } else if (props.icon === 'right') {
        buttonClass += ` ${s.rightIcon}`;
    }

    if (props.isLink) {
        return (
            <Link href={props.href}>
                <a className={`${s.btn} ${buttonClass} ${props.className}`}>{props.children}</a>
            </Link>
        )
    } else {
        return (
            <button disabled={props.disabled} onClick={props.onClick} type={'button'}
                    className={`${s.btn} ${buttonClass} ${props.className}`}>
                {props.children}
            </button>
        )
    }
}

Button.defaultProps = {
    isLink: false,
    size: 'medium',
    disabled: false,
    color: 'primary',
    className: '',
    icon: ''
}
