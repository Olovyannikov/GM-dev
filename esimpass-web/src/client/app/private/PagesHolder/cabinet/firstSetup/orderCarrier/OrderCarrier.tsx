import * as React from 'react';
import { OrderESIM } from './orderESIM/OrderESIM';
import { OrderSIM } from './orderSIM/OrderSIM';

interface OrderCarrierModel {
    fits? : boolean;
}

export const OrderCarrier = (props : OrderCarrierModel) => {

    return (
        props.fits ? <OrderESIM/> : <OrderSIM />
    )
}
