import * as React from 'react';
import s from './Packages.module.scss';
import { Toast } from '../../../../components/toast/Toast';
import { Button } from '../../../../../components/button/Button';
import { PackageTable } from './PackageTable/PackageTable';
import { MoreIcon } from '../../../../../components/icons';
import { More } from '../../../../components/more/More';

export const Packages = () => {

    return (
        <div className='Packages'>
            <h2 className={s.title}>Пакеты интернета</h2>
            {/*<Toast>*/}
            {/*    <p>У вас пока нет купленных пакетов интернета</p>*/}
            {/*    <Button isLink href={'/catalog'}>Перейти к каталогу</Button>*/}
            {/*</Toast>*/}
            {/*<Toast>*/}
            {/*    <p>У вас не заполнены персональные данные</p>*/}
            {/*    <Button isLink href={'/account'}>Заполнить данные</Button>*/}
            {/*</Toast>*/}
            <PackageTable />
        </div>
    );
};
