import * as React from 'react';
import * as rx from 'rxjs';
import * as ro from 'rxjs/operators';
import s from './MyDevices.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';


import {CONNECTION} from 'Connection';
import {Logger, waitForClose} from 'utils';
import {ListDevicesResponse} from 'generated/proto.web';
import {Device} from './device/Device';
import {AddDevice} from './addDevice/AddDevice';
import {BackArr, Preloader} from '../../../../../../components/icons';
import {DeviceActivation} from "./deviceActivation/DeviceActivation";
import {useState} from "react";
import {DeviceOptions} from "./deviceOptions/DeviceOptions";
import { DeviceDelete } from './deviceDelete/DeviceDelete';
import { DeviceDisable } from './deviceDisable/DeviceDisable';

interface MyDevicesModel {
    setSidebarActive?: any,
    setData?: any,
    getOptions?: any,
    setOptions?: any,
    getDelete?: any,
    setDelete?: any;
    getDisable?: any,
    setDisable?: any;
}

export const MyDevices = (props: MyDevicesModel) => {

    // const logger = new Logger('MyDevices');
    //
    // const closedSubject = waitForClose();
    //
    // const [packages, setPackages] = React.useState<ListDevicesResponse.SuccessModel.DeviceModel[]>([]);
    // const [inProgress, setInProgress] = React.useState<boolean>(true);

    // React.useEffect(() => {
    //
    //     CONNECTION.listDevices({})
    //         .pipe(
    //             ro.tap(response => {
    //                 if (response.success) {
    //                     setPackages(prev => prev = response.success.devices);
    //                 }
    //                 setInProgress(prev => prev = false);
    //             }),
    //             ro.takeUntil(closedSubject),
    //         )
    //         .subscribe(logger.rx.subscribe('Error in device response'));
    //
    // }, []);
    //
    // const doRenderFilteredDevice = () => {
    //
    //     if (packages) {
    //         return packages.map(el => {
    //
    //             if (el.currentPack) {
    //                 return (<SwiperSlide><Device device={el} key={el.deviceId} /></SwiperSlide>);
    //             }
    //         });
    //     } else {
    //         return <h1>doesnt have devices</h1>;
    //     }
    // };

    const [activation, setActivation] = React.useState<boolean>(false);

    const getDataToObject = (e: any) => {
        props.setSidebarActive(true);
        props.setData((prev: any) => ({
            ...prev,
            title: e.target.querySelector('p').innerText,
            type: e.target.querySelector('small').innerText,
            status: e.target.querySelector('span').innerText,
            agent: e.target.querySelector('b').innerText
        }))
    }

    const doRender = () => {
        if (true) {
            return (
                <SwiperSlide>
                    <div style={{width: `142px`}}>
                        <Preloader/>
                    </div>
                </SwiperSlide>
            );
        } else {
            // return doRenderFilteredDevice();
        }
    };

    return (
        <div className={s.slider}>
            <div className={s.myDevices}>
                <h3>Мои устройства:</h3>
                <Swiper
                    className={s.swiper}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    navigation={{
                        nextEl: `.${s.next}`,
                        prevEl: `.${s.prev}`,
                    }}
                    onSlideChange={swiper => swiper.realIndex === 0 ? swiper.$el[0].classList.remove('swiper-middle') : swiper.$el[0].classList.add('swiper-middle')}
                    onReachEnd={(swiper) => swiper.$el[0].classList.add('swiper-end')}
                    onReachBeginning={swiper => swiper.$el[0].classList.remove('swiper-end')}
                >
                    <SwiperSlide>
                        <Device user={'Вы'} type={'unknown'} isActiveStatus={false}
                                onClick={() => setActivation(true)}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Device user={'Ксюха'} type={'pad'} name={'iPad mini 9'} isActiveStatus={true}
                                onClick={(e: any) => getDataToObject(e)}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Device user={'Манебус'} type={'watch'} name={'Galaxy Watch S3'} isActiveStatus={true}
                                onClick={(e: any) => getDataToObject(e)}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Device user={'Ксюха'} type={'tel'} name={'Iphone X'} isActiveStatus={true}
                                onClick={(e: any) => getDataToObject(e)}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <AddDevice/>
                    </SwiperSlide>
                </Swiper>

                <DeviceActivation setActive={setActivation} active={activation}/>
                <DeviceOptions active={props.getOptions} setActive={props.setOptions}/>
                <DeviceDisable active={props.getDisable} setActive={props.setDisable}/>
                <DeviceDelete active={props.getDelete} setActive={props.setDelete}/>
            </div>
            <button className={`${s.control} ${s.next} btn-reset`}><BackArr stroke={`currentColor`}/></button>
            <button className={`${s.control} ${s.prev} btn-reset`}><BackArr stroke={`currentColor`}/></button>
        </div>
    );
};
