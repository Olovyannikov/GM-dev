import s from '../../CountryChoose.module.scss';
import {ListRatesResponse} from 'generated/proto.web';
import * as React from 'react';
import {unitConventer} from 'utils';

interface PackItemProps {
    pack?: ListRatesResponse.SuccessModel.RateModel.PackModel
}

export const PackItem = (props: PackItemProps) => {

    return (
        <div className={s.tariff}>
            <div className={s.col}>
                <h4>{unitConventer(+props.pack.quota).quota} {unitConventer(+props.pack.quota).unit}</h4>
                <p>{props.pack.price} ₽</p>
            </div>
        </div>
    )
}
