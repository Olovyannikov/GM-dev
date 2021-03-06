import s from './EsimTravelExample.module.scss';
import {Container} from "../../../../components/container/Container";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import bali from '../../../../../resources/img/bali.jpg';
import cyprus from '../../../../../resources/img/cypres.jpg';
import dominicana from '../../../../../resources/img/dominicana.jpg';
import egypt from '../../../../../resources/img/egypt.jpg';
import greece from '../../../../../resources/img/greece.jpg';
import mexico from '../../../../../resources/img/mexica.jpg';
import turkey from '../../../../../resources/img/turkey.jpg';
import uae from '../../../../../resources/img/uae.jpg';
import {Button} from "../../../../components/button/Button";
import {BackArr} from "../../../../components/icons";
import {STATE_API} from 'redux/StateApi';
import {useEffect, useState} from "react";
import Image from "next/image";
SwiperCore.use([Navigation, Pagination]);

export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};
/* Кастомный хук, проверяющий загрузились ли данные. Это косяк Next, но не SSR. Так как контент loop генерится
"на лету" - сервер не успевает понять, где ему брать данные */

export const EsimTravelExample = (props: {title?: string, stroke?: string}) => {

    const loaded = useLoaded();

    return (
        <section className={s.travel} id="tarrifs">
            <Container>
                <h2 className={s.title}>{props.title || `Сколько будет стоить eSIM в путешествии?`}</h2>
                <div className={s.slider}>
                    {loaded && <Swiper
                        loop={true}
                        spaceBetween={11}
                        slidesPerView={1.005}
                        navigation={{
                            nextEl: `.${s.next}`,
                            prevEl: `.${s.prev}`
                        }}
                        pagination={{clickable: true}}
                        updateOnWindowResize={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 25
                            }
                        }}>
                        <SwiperSlide>
                            <Image src={greece} alt=""/>
                            <div className={s.card}>
                                <h3>Греция</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>100 мб</span>
                                        <p>217 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>1967 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={cyprus} alt=""/>
                            <div className={s.card}>
                                <h3>Кипр</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>100 мб</span>
                                        <p>2217 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>19067 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={turkey} alt=""/>
                            <div className={s.card}>
                                <h3>Турция</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>100 мб</span>
                                        <p>217 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>1967 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={dominicana} alt=""/>
                            <div className={s.card}>
                                <h3>Доминиканка</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>1000 мб</span>
                                        <p>2172 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>19670 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => STATE_API.showPublicWizard('auth')}>
                            <Image src={mexico} alt=""/>
                            <div className={s.card}>
                                <h3>Мексика</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>100 мб</span>
                                        <p>217 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>1967 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => STATE_API.showPublicWizard('auth')}>
                            <Image src={uae} alt=""/>
                            <div className={s.card}>
                                <h3>ОАЭ</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>100 мб</span>
                                        <p>217 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>1967 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => STATE_API.showPublicWizard('auth')}>
                            <Image src={egypt} alt=""/>
                            <div className={s.card}>
                                <h3>Египет</h3>
                                <div className={s.info}>
                                    <div className={s.left}>
                                        <span>100 мб</span>
                                        <p>217 ₽</p>
                                    </div>
                                    <div className={s.right}>
                                        <span>1 гб</span>
                                        <p>1967 ₽</p>
                                    </div>
                                </div>
                                <Button onClick={() => STATE_API.showPublicWizard('auth')}
                                        color={'dark'}>Подключить</Button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    }
                    <button className={`${s.next} btn-reset`}><BackArr stroke={props.stroke || `#fff`}/></button>
                    <button className={`${s.prev} btn-reset`}><BackArr stroke={props.stroke || `#fff`}/></button>
                </div>
            </Container>
        </section>
    )
}
