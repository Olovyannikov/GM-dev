import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode
}
