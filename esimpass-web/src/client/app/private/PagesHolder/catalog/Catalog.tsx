import * as React from 'react';

import { Chooser } from './chooser/Chooser';
import { PopularDestination } from './popularDestination/PopularDestination';

export const Catalog = () => {

    return (
        <>
            <PopularDestination />
            <Chooser />
        </>
    )
}
