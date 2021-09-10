import * as React from 'react';
import { Packages } from './packages/Packages';
import { TopBlock } from './topBlock/TopBlock';
import { Container } from '../../../components/container/Container';

export const Main = () => {

    return (
        <div className='Main'>
            <Container>
                <TopBlock />
                <Packages />
            </Container>
        </div>

    );
};
