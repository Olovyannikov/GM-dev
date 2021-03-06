import s from './StepSlider.module.scss';
import {Container} from "../../../../components/container/Container";
import iphone from '../../../../../resources/img/iPhoneScroll@2x.png';
import iphone2 from '../../../../../resources/img/iPhoneScroll2@2x.png';
import iphone3 from '../../../../../resources/img/iPhoneScroll3@2x.png';
import iphone4 from '../../../../../resources/img/iPhoneScroll4@2x.png';
import qr from '../../../../../resources/img/qrcode.png';
import SwiperCore, {Controller, Navigation, Pagination, EffectFade, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState} from "react";
import {AppGallery, Appstore, BackArr, CircleBtn, GooglePlay} from "../../../../components/icons";
import Link from "next/link";
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination, Controller, EffectFade, Autoplay]);

export const StepSlider = () => {
    const [step, setStep] = useState(0)
    const [length, setLength] = useState<number>(0);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <section className={s.steps} id="setup">
            <Container className={s.container}>
                <h2 className={s.title}>Как подключить eSIM pass?</h2>
                <div className={s.content}>
                    <div className={s.sliderWithImages}>
                        <Swiper
                            effect={'fade'}
                            updateOnWindowResize={true}
                            onResize={swiper => {
                                swiper.update();
                                swiper.updateSize();
                                swiper.updateSlides();
                                swiper.updateAutoHeight();
                            }}
                            freeMode={false}
                            observeParents={true}
                            observer={true}
                            resizeObserver={true}
                            watchSlidesProgress={true}
                            // autoplay={true}
                            onInit={swiper => {
                                setStep(1);
                                setLength(swiper.$wrapperEl[0].childElementCount);
                            }}
                            navigation={{
                                nextEl: `.${s.next}`,
                                prevEl: `.${s.prev}`
                            }}
                            autoHeight={true}
                            onSwiper={setFirstSwiper}
                            controller={{control: secondSwiper}}
                            slidesPerView={1}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            pagination={{clickable: true}}
                            breakpoints={{
                                1200: {
                                    direction: 'vertical',
                                    slidesPerView: 1
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className={`${s.sliderImage} ${s.sliderImageTall}`}>
                                    <Image src={iphone} alt="Как скачать приложение?"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${s.sliderImage} ${s.sliderImageTall}`}>
                                    <Image src={iphone2} alt="Как скачать приложение?"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${s.sliderImage} ${s.sliderImageTall}`}>
                                    <Image src={iphone3} alt="Как скачать приложение?"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${s.sliderImage} ${s.sliderImageTall}`}>
                                    <Image src={iphone4} alt="Как скачать приложение?"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className={s.textSlider}>
                        <Swiper
                            freeMode={false}
                            autoHeight={true}
                            updateOnWindowResize={true}
                            controller={{control: firstSwiper}}
                            onSwiper={setSecondSwiper}
                            onReachEnd={swiper => swiper.params.slidesOffsetBefore = -200}
                            slidesPerView={1}
                            watchOverflow={false}
                            // autoplay={true}
                            breakpoints={{
                                1200: {
                                    direction: 'vertical',
                                    slidesPerView: 'auto',
                                    spaceBetween: 40,
                                    slideToClickedSlide: true,
                                    centeredSlides: true,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <span className={s.counter}>
                                    Шаг 1/{length}
                                </span>
                                <h3 className={s.slideTitle}>Советуем скачать приложение eSIM pass</h3>
                                <div className={s.sliderContent}>
                                    <p className={s.sliderText}>Приложение eSIM pass позволяет быстро работать с
                                        подключением и управлением пакетами интернет-трафика. В приложении отражается
                                        текущий баланс, количество оставшегося <br/> интернет-трафика и срок действия
                                        подключенного роумингового пакета. Также вы можете сделать это и в Личном
                                        кабинете.</p>
                                    <p className={s.subTitle}>*Рекомендуем установить приложение заранее до поездки т.к.
                                        для этого потребуется, чтобы ваше устройство было подключено к интернету. </p>
                                    <div className={s.download}>
                                        <div className={s.qrcode}>
                                            <Image src={qr} alt="Скачать приложение. QR-код"/>
                                        </div>
                                        <ul className={`list-reset ${s.appstores}`}>
                                            <li>
                                                <Link href={'#'}>
                                                    <a>
                                                        <GooglePlay/>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'#'}>
                                                    <a>
                                                        <Appstore/>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'#'}>
                                                    <a>
                                                        <AppGallery/>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <span className={s.counter}>
                                    Шаг 2/{length}
                                </span>
                                <h3 className={s.slideTitle}>Заполни в приложении персональные данные.</h3>

                            </SwiperSlide>
                            <SwiperSlide>
                                <span className={s.counter}>
                                    Шаг 3/{length}
                                </span>
                                <h3 className={s.slideTitle}>Получи QR-код.</h3>
                                <div className={s.sliderContent}>
                                    <p className={s.sliderText}>Для получения QR-кода необходимо пополнить баланс
                                        eSIM-карты на 560 рублей. Для автоматической настройки виртуальной eSIM в
                                        смартфоне отсканируй камерой уникальный QR-код, который придет на почту.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <span className={s.counter}>Шаг 4/{length}</span>
                                <h3 className={s.slideTitle}>Выбери страну поездки, подключи и оплати необходимый пакет
                                    интернет-трафика.
                                </h3>

                                <div className={s.sliderContent}>
                                    <p className={s.sliderText}>Оплаченный пакет трафика включится автоматически по
                                        прибытию в выбранную страну. Проверьте чтобы в Вашем смартфоне была включена
                                        передача данных в роуминге.
                                    </p>
                                    <p className={s.sliderText}>Если пакет интернет-трафика не выбран автоматически,
                                        включится помегабайтная тарификация. Для отключения помегабайтной тарификации
                                        необходимо выключить передачу данных в роуминге на данной SIM/eSIM-карте.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={s.controls}>
                    <button type="button" className={`btn-reset ${s.prev}`}><CircleBtn/></button>
                    <button type="button" className={`btn-reset ${s.next}`}><CircleBtn/></button>
                </div>
            </Container>

        </section>
    )
}
