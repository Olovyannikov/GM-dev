import {DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISocialProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    inverted?: boolean
}
