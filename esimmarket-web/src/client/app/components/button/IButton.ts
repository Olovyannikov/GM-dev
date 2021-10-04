import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    color?: 'primary' | 'secondary' | 'dark' | 'light' | 'link',
    size?: 'medium' | 'small' | 'tiny',
    href?: string,
}
