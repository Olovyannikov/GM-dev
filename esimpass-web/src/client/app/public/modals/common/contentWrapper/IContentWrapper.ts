import React from "react";
import {IHeaderProps} from '../header/IHeader';

export interface IContentWrapperProps extends Omit<IHeaderProps, 'className'> {
    containerClassName?: string,
    headerClassName?: string,
    className?: string,
    navigation?: React.ReactElement, 
    children?: JSX.Element | JSX.Element[]
}