import s from './MainSlider.module.scss';
import {Container} from '../../../../components/container/Container';
import Image from 'next/image';
import sliderBackgroundImage from '../../../../../resources/img/slider-background-big@2x.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import cn from "classnames";
import sprite from '../../../../../resources/img/sprite/sprite.svg';
import {Navigation, Pagination} from "swiper";
import circles from '../../../../../resources/img/roundGraphic.png';
import iphone from '../../../../../resources/img/iphone.png';
import {Button} from "../../../../components/button/Button";

export const MainSlider = () => {
    return (
        <section className={s.slider}>
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{clickable: true}}
                navigation={{
                    nextEl: `.${s.next}`,
                    prevEl: `.${s.prev}`
                }}>
                <div className={cn(s.sliderControls, '')}>
                    <button className={cn(s.prev, s.control)} aria-label="Предыдущий слайд">
                        <svg width={46} height={46}>
                            <use href={`${sprite.src}#chevron`}/>
                        </svg>
                    </button>
                    <button className={cn(s.next, s.control)} aria-label="Следующий слайд">
                        <svg width={46} height={46}>
                            <use href={`${sprite.src}#chevron`}/>
                        </svg>
                    </button>
                </div>
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
                    <div className={s.content}>
                        <Container className={s.container}>
                            <div className={s.textSliderContent}>
                                <h2 className={s.sliderTitle}>Легко переключайся между операторами</h2>
                                <p className={s.sliderDescr}>
                                    Теперь тебе доступны все тарифные планы российских операторов
                                </p>
                                <Button className={s.orderBtn}>ЗАКАЗАТЬ ESIM</Button>
                            </div>
                            <div className={s.images}>
                                <Image src={circles}/>
                                <Image src={iphone}/>
                            </div>
                        </Container>
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
