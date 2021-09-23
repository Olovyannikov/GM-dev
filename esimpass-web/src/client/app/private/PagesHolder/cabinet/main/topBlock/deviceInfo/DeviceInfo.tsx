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
            less: 1000,
            price: 1000,
            time: 'Неактивен',
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
                            backgroundImage:
                                props.data?.agent === 'tel' ?
                                    `url("data:image/svg+xml,%0A%3Csvg width='132' height='132' viewBox='0 0 132 132' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M111.499 0H20.4977C12.9161 0 6.71094 6.19936 6.71094 13.7867V190.326C6.71094 197.913 12.9161 204.118 20.4977 204.118H111.499C119.081 204.118 125.286 197.925 125.286 190.332V13.7867C125.286 6.19936 119.081 0 111.499 0ZM51.442 9.93764H80.5551C81.4766 9.93764 82.223 10.6841 82.223 11.6114C82.223 12.5329 81.4766 13.2793 80.5551 13.2793H51.442C50.5206 13.2793 49.7741 12.5329 49.7741 11.6114C49.7741 10.6841 50.5206 9.93764 51.442 9.93764ZM65.9986 197.225C62.1903 197.225 59.1052 194.14 59.1052 190.326C59.1052 186.512 62.1903 183.432 65.9986 183.432C69.8068 183.432 72.8919 186.512 72.8919 190.326C72.8919 194.14 69.8068 197.225 65.9986 197.225ZM115.693 178.603H16.3045V21.864H115.693V178.603Z' fill='%23808192'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='132' height='132' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`
                                    : props.data?.agent === 'pad' ?
                                        `url("data:image/svg+xml,%0A%3Csvg width='132' height='132' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.8' %3E%3Cpath d='M41.0215 0H10.977C7.79229 0 5.19922 2.431 5.19922 5.41663V46.5833C5.19922 49.569 7.79229 52 10.977 52H41.0214C44.2062 52 46.7992 49.569 46.7992 46.5834V5.41663C46.7992 2.431 44.2062 0 41.0215 0ZM25.9992 48.75C24.7258 48.75 23.6881 47.7771 23.6881 46.5834C23.6881 45.3896 24.7259 44.4167 25.9992 44.4167C27.2726 44.4167 28.3103 45.3896 28.3103 46.5834C28.3103 47.7771 27.2727 48.75 25.9992 48.75ZM42.177 42.25C42.177 42.848 41.6592 43.3334 41.0214 43.3334H10.977C10.3391 43.3334 9.82137 42.848 9.82137 42.25V5.41663C9.82137 4.81863 10.3391 4.33327 10.977 4.33327H41.0214C41.6592 4.33327 42.177 4.81863 42.177 5.41663V42.25Z' fill='%23808192'/%3E%3C/g%3E%3C/svg%3E%0A")` :
                                        props.data?.agent === 'watch' ?
                                            `url("data:image/svg+xml,%0A%3Csvg width='132' height='132' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.8' clip-path='url(%23clip0)'%3E%3Cpath d='M33.9855 43.5632C33.6555 43.3326 33.2282 43.2919 32.8643 43.4593C27.7755 45.7901 21.9724 45.7901 16.8836 43.4593C16.5152 43.2919 16.0901 43.3326 15.76 43.5632C15.4323 43.796 15.2514 44.1826 15.2853 44.5851L15.8346 50.967C15.8843 51.5502 16.375 52.0001 16.9605 52.0001H32.7851C33.3706 52.0001 33.8612 51.5502 33.9109 50.967L34.4603 44.5851C34.4942 44.1849 34.3133 43.7961 33.9855 43.5632Z' fill='%23808192'/%3E%3Cpath d='M15.76 8.43684C16.0924 8.66965 16.5196 8.71034 16.8836 8.54079C21.9724 6.21 27.7756 6.21 32.8643 8.54079C33.0157 8.60861 33.1763 8.64252 33.3345 8.64252H33.3571C34.0149 8.62218 34.5122 8.14521 34.51 7.51215C34.51 7.3675 34.4829 7.22953 34.4332 7.103L33.911 1.03309C33.8613 0.449839 33.3707 0 32.7851 0H16.9605C16.375 0 15.8843 0.449839 15.8346 1.03309L15.2853 7.41498C15.2514 7.81512 15.4323 8.20402 15.76 8.43684Z' fill='%23808192'/%3E%3Cpath d='M24.873 9.04431C15.5228 9.04431 7.91797 16.6492 7.91797 25.9994C7.91797 35.3496 15.5228 42.9544 24.873 42.9544C34.2232 42.9544 41.8281 35.3496 41.8281 25.9994C41.8281 16.6492 34.2232 9.04431 24.873 9.04431Z' fill='%23808192'/%3E%3Cpath d='M24.8358 12.2694C17.264 12.2694 11.1055 18.4279 11.1055 25.9997C11.1055 33.5716 17.264 39.7301 24.8358 39.7301C32.4077 39.7301 38.5661 33.5716 38.5661 25.9997C38.5661 18.4279 32.4077 12.2694 24.8358 12.2694Z' fill='%23F7F7FC'/%3E%3Cpath d='M42.9585 23.7393C42.3346 23.7393 41.8281 24.2457 41.8281 24.8696V26V27.1304C41.8281 27.7543 42.3346 28.2607 42.9585 28.2607C43.5824 28.2607 44.0889 27.7543 44.0889 27.1304V24.8697C44.0888 24.2457 43.5824 23.7393 42.9585 23.7393Z' fill='%23808192'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='132' height='132' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")` : ''
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
                                        <small>{item.time}</small>
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
