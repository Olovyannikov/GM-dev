import * as React from 'react';

import s from './ContentWrapper.module.scss';
import {Header} from '../header/Header';
import {Container} from "../../../../components/container/Container";
import { useModalShow } from 'hooks/useModalShow';
import {IContentWrapperProps} from './IContentWrapper';

export const ContentWrapper: React.FC<IContentWrapperProps> = (props) => {
    
    const show = useModalShow(false); 

    const {containerClassName, title, headerClassName, closeIconLabel, leftBtn, className, navigation} = props;

    return (
        <section onClick={(e) => e.stopPropagation()}
                 className={`${s.contentWrapper} ${className ? className : ''} ${show ? s.active: ''}`}>
            <Header 
                title={title} 
                closeIconLabel={closeIconLabel}
                className={headerClassName}
                leftBtn={leftBtn}
                />
            {navigation}    
            <Container className={containerClassName ? containerClassName : ''}>
                {props.children}            
            </Container>            
        </section>
    )
}
