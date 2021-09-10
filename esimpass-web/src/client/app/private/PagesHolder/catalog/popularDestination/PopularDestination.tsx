import * as React from 'react';
import s from './PopularDestination.module.scss';
import {EsimTravelExample} from '../../../../public/PagesHolder/index/esimTravelExample/EsimTravelExample';
import {Container} from '../../../components/container/Container';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);

export const PopularDestination = () => {

    return (
        <section className={s.popularDestination}>
            <Container>
                <EsimTravelExample stroke={'#000'} title={'Популярные направления'}/>
            </Container>
        </section>
    )
}
