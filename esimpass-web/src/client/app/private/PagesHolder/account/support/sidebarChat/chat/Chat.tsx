import React from 'react';
import s from './Chat.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Mousewheel, Scrollbar} from "swiper";
import {Message} from './message/Message';
import Image from 'next/image';
import img from '../../../../../../../resources/img/userAvatar.jpeg';

interface ChatModel {
    isReverse?: boolean;
}

export const Chat = (props: ChatModel) => {
    return (
        <Swiper
            className={s.swiper}
            modules={[Scrollbar, Mousewheel, FreeMode]}
            direction={'vertical'}
            slidesPerView={'auto'}
            freeMode={{
                enabled: true,
            }}
            scrollbar={{
                draggable: false
            }}
            mousewheel={true}
            onScroll={swiper => swiper.update()}
        >
            <SwiperSlide className={s.slide}>
                <div className={s.day}>
                    <time>Сегодня</time>
                    <div className={s.item}>
                        <div className={s.list}>
                            <Message dateTime={'2004-07-24T19:32'} time={'19:32'}
                                     message={'Добрый день! Я хочу вас спросить о том, где мой заказ? Я кушать хочу!'}/>
                        </div>
                    </div>
                    <div className={`${s.item} ${s.reverse}`}>
                        <p className={s.name}>Анна</p>
                        <div className={s.list}>
                            <Message message={'Добрый день! Секунду, сейчас сверю ваши данные'} time={'19:34'}
                                     dateTime={'2004-07-24T19:34'}/>
                            <Message message={'Да, вам нужно перейти на эту страницу и нажать вот эту кнопку'} time={'19:34'}
                                     dateTime={'2004-07-24T19:34'}/>
                            <div className={s.image}>
                                <Image src={img}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.day}>
                    <time>Вчера</time>
                    <div className={s.item}>
                        <div className={s.list}>
                            <Message isFile message={'fake.jpg'}/>
                        </div>
                    </div>
                    <div className={`${s.item} ${s.reverse}`}>
                        <div className={s.list}>
                            <Message/>
                            <Message/>
                        </div>
                    </div>
                </div>
                <div className={s.day}>
                    <time>Вчера</time>
                    <div className={s.item}>
                        <div className={s.list}>
                            <Message/>
                        </div>
                    </div>

                    {/* Reverse у ответа администратора чата - имеется аватар */}
                    <div className={`${s.item} ${s.reverse}`}>
                        <p className={s.name}>Анна</p>
                        <div className={s.list}>
                            <Message/>
                            <Message/>
                            <div className={s.image}>
                                <Image src={img}/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
