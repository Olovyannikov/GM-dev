import s from './MainSlider.module.scss';
import { Container } from '../../../../components/container/Container';
import Image from 'next/image';
import sliderBackgroundImage from '../../../../../resources/img/slider-background-big.png';
import { Swiper, SwiperSlide } from 'swiper/react';

export const MainSlider = () => {
    return (
        <section>
            <Swiper>
                <SwiperSlide>
                    <div className={s.background}>
                        <Image
                            src={sliderBackgroundImage}
                            quality={100}
                            layout='fill'
                            objectFit='cover'
                            aria-hidden='true'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.background}>
                        <Image
                            src={sliderBackgroundImage}
                            quality={100}
                            layout='fill'
                            objectFit='cover'
                            aria-hidden='true'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>

            <Container>
            </Container>
        </section>
    );
};
