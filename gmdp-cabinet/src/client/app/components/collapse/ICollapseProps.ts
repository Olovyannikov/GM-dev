import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICollapseProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode,
    isOpen: boolean,
    label: string,
    contentWrapperClassName: string,
    collapseWrapperClassName: string
}
