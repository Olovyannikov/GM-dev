import * as React from 'react';

import s from './Cabinet.module.scss';
import { FirstSetup } from './firstSetup/FirstSetup';
import { Main } from './main/Main';

export const Cabinet = () => {
    return (
        <main className={s.Cabinet}>
            {/*<FirstSetup/>*/}
            {/* При первом запуске - First Setup иначе Main */}
            <Main />
        </main>
    );
};
