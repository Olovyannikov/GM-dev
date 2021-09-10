import * as React from 'react';

import {Button} from 'app/components/button/Button';
import {Preloader} from 'app/components/icons';
import s from '../CountryChoose.module.scss';
import {ListRatesResponse} from 'generated/proto.web';
import {PackItem} from './packItem/PackItem';
import { STATE_API } from 'redux/StateApi';


interface CountryRatesProps {
    rate?: ListRatesResponse.SuccessModel.RateModel;
}

export const CountryRate = (props: CountryRatesProps) => {

    const renderRate = () => {
        if (props.rate) {
            return (
                <div className={s.tariffMain}>
                    <h3 className={s.tariffDesktopTitle}>{props.rate.countryName}</h3>
                    <div className={s.tariffGrid}>
                        <div className={`${s.tariff} ${s.left}`}>
                            <div className={`${s.col} ${s.col1}`}>
                                <h4>Помегабайтный</h4>
                                <p>{props.rate && props.rate?.price} ₽</p>
                            </div>
                        </div>
                        {props.rate && props.rate?.packs?.map((pack, index) => <PackItem pack={pack} key={index}/>)}
                    </div>
                </div>
            )
        }
        else return <Preloader />
    }

    return (
        <div className={s.tariffInfo}>
            {renderRate()}
            <div className={s.disclaimer}>
                <Button onClick={() => STATE_API.showPublicWizard('auth')}>Подключить</Button>
                <p className={s.disclaimerText}>
                    Приведена предварительная стоимость без учета колебания курса рубля и euro, актуальные
                    тарифы по
                    операторам и странам указаны в приложении eSIM pass.
                </p>
            </div>
        </div>
    )
}
