import s from './DeviceInfo.module.scss';
import * as React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Mousewheel, Scrollbar} from "swiper";
import {Progress} from "../../../../../components/progress/Progress";
import {Button} from "../../../../../../components/button/Button";

interface DeviceInfoModel {
    data?: any;
}

export const DeviceInfo = (props: DeviceInfoModel) => {

    const packages = [
        {
            less: 890,
            price: 1000,
            time: '5дн 12ч',
            type: 'watch',
            name: 'JoJo Teletype',
            user: 'Ксюха (Galaxy Watch Plus)',
            country: 'Франция',
            countryCode: 'fr'
        },
        {
            less: 100,
            price: 1200,
            time: '1дн 1ч',
            type: 'tel',
            name: 'Genterlugenlez',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Германия',
            countryCode: 'de'
        },
        {
            less: 0,
            price: 1000,
            time: 'Трафик закончился',
            type: 'pad',
            name: 'Prepalo',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Китай',
            countryCode: 'cn'
        },
        {
            less: 0,
            price: 1000,
            time: 'Трафик закончился',
            type: 'pad',
            name: 'Prepalo',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Китай',
            countryCode: 'cn'
        },
        {
            less: 100,
            price: 1200,
            time: '1дн 1ч',
            type: 'tel',
            name: 'Genterlugenlez',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Германия',
            countryCode: 'de'
        },
        {
            less: 0,
            price: 1000,
            time: 'Трафик закончился',
            type: 'pad',
            name: 'Prepalo',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Китай',
            countryCode: 'cn'
        },
        {
            less: 0,
            price: 1000,
            time: 'Трафик закончился',
            type: 'pad',
            name: 'Prepalo',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Китай',
            countryCode: 'cn'
        },
    ];

    return (
        <>
            <div className={`${s.top} swiper-top`}>
                <svg width="380" height="326" viewBox="0 0 380 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <g mask="url(#mask0)">
                            <g opacity="0.8" filter="url(#filter1_f)">
                                <g filter="url(#filter2_f)">
                                    <path
                                        d="M161.614 190.447C149.798 200.721 149.123 208.563 143.227 220.607C131.845 243.856 140.228 259.123 126.7 281.935C99.0984 328.481 51.3676 181.964 119.258 155.181C161.936 138.345 286.819 134.308 249.171 155.181C234.136 163.517 219.746 162.637 202.766 169.422C185.242 176.424 173.672 179.962 161.614 190.447Z"
                                        fill="url(#paint0_linear)"/>
                                </g>
                                <g filter="url(#filter3_f)">
                                    <path
                                        d="M144.764 218.9C154.065 217.641 160.136 210.575 166.041 194.136C178.003 160.835 108.112 150.256 117.846 186.842C123.983 209.909 132.882 220.508 144.764 218.9Z"
                                        fill="#48E9FF"/>
                                </g>
                                <g filter="url(#filter4_f)">
                                    <path
                                        d="M237.143 197.685C265.477 197.882 283.772 192.808 301.265 179.899C336.701 153.75 123.168 135.564 154.017 167.359C173.469 187.406 200.951 197.432 237.143 197.685Z"
                                        fill="#72EEFF"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0.5" y="-8" width="393" height="334" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feOffset dx="2" dy="4"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter1_f" x="6.5" y="63" width="376.745" height="306" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="39" result="effect1_foregroundBlur"/>
                        </filter>
                        <filter id="filter2_f" x="14.5" y="71" width="311.653" height="290" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="35" result="effect1_foregroundBlur"/>
                        </filter>
                        <filter id="filter3_f" x="26.9141" y="73.8591" width="230.511" height="235.2"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur"/>
                        </filter>
                        <filter id="filter4_f" x="60.957" y="60.4587" width="334.288" height="227.231"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur"/>
                        </filter>
                        <linearGradient id="paint0_linear" x1="88.3205" y1="297.048" x2="189.777" y2="145.233"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B9F348"/>
                            <stop offset="1" stopColor="#F3FFDC"/>
                        </linearGradient>

                    </defs>
                </svg>
                <h4>{props.data?.title}</h4>
                <p>{props.data?.type}</p>
                <small>{props.data?.status}</small>
                <span
                    style={
                        {
                            background:
                                props.data?.agent === 'tel' ?
                                    `url("data:image/svg+xml,%0A%3Csvg width='132' height='132' viewBox='0 0 132 132' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M111.499 0H20.4977C12.9161 0 6.71094 6.19936 6.71094 13.7867V190.326C6.71094 197.913 12.9161 204.118 20.4977 204.118H111.499C119.081 204.118 125.286 197.925 125.286 190.332V13.7867C125.286 6.19936 119.081 0 111.499 0ZM51.442 9.93764H80.5551C81.4766 9.93764 82.223 10.6841 82.223 11.6114C82.223 12.5329 81.4766 13.2793 80.5551 13.2793H51.442C50.5206 13.2793 49.7741 12.5329 49.7741 11.6114C49.7741 10.6841 50.5206 9.93764 51.442 9.93764ZM65.9986 197.225C62.1903 197.225 59.1052 194.14 59.1052 190.326C59.1052 186.512 62.1903 183.432 65.9986 183.432C69.8068 183.432 72.8919 186.512 72.8919 190.326C72.8919 194.14 69.8068 197.225 65.9986 197.225ZM115.693 178.603H16.3045V21.864H115.693V178.603Z' fill='%23808192'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='132' height='132' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`
                                    : ''
                        }
                    }
                />
            </div>
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
                onScroll={swiper => {
                    swiper.update();
                    swiper.progress > 0 ? swiper.$el.prev('.swiper-top').addClass(s.topShadow) :
                        swiper.$el.prev('.swiper-top').removeClass(s.topShadow);
                }}
                onReachBeginning={swiper => {
                    swiper.update();
                    swiper.$el.prev('.swiper-top').removeClass(s.topShadow)
                }}
            >
                <SwiperSlide>
                    {packages.map((item, id) => (
                        <div key={id} className={`${s.content}`}>
                            <div className={s.card}>
                                <div className={s.cardTop}>
                                    <div className={s.cardColumn}>
                                        <h5>Genterlugenlez</h5>
                                        <small>ост. 5дн 12ч</small>
                                    </div>
                                    <div className={s.cardColumn}>
                                        <p>{item.country}</p>
                                        <span className={`flag flag-icon-${item.countryCode}`}/>
                                    </div>
                                </div>
                                <Progress className={s.progress} item={item}/>
                            </div>
                        </div>
                    ))}

                    <Button className={s.buyBtn} size={'medium'}>Купить тариф для устройства</Button>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
