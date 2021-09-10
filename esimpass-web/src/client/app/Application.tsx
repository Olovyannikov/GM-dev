import s from './Application.module.scss';

import * as React from 'react';

interface ApplicationModel {
    children?: React.ReactChild
}

export const Application = (props: ApplicationModel) => {
    return (
        <div className={s.Application}>
            {props.children}
        </div>
    )
}
