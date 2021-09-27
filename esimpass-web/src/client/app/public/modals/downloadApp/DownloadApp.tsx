import React from 'react';
import s from "./DownloadApp.module.scss";
import {Container} from "../../../components/container/Container";
import iphone from '../../../../resources/img/iphoneModal.png';
import qrcode from '../../../../resources/img/qrcode.png';
import Link from "next/link";
import {AppGallery, Appstore, GooglePlay} from "../../../components/icons";
import { STATE_API } from "redux/StateApi";
import Image from "next/image";
import { useModalShow } from 'hooks/useModalShow';


export const DownloadApp: React.FC = () => {

    const show = useModalShow(false); 

    return (
        <div onClick={(e) => e.stopPropagation()} className={`${s.appModal} ${show ? s.active : ''}`}>
            <Container className={s.container}>
                <div className={s.modalTop}>
                    <button onClick={STATE_API.hideModal} className={`${s.burger} ${s.active}`} />
                </div>
                <div className={s.modalPhone}>
                    <Image src={iphone} />
                </div>
                <div className={s.modalMessage}>
                    <p className={s.modalTitle}>
                        Скачайте приложение ESIM, чтобы получить доступ
                        ко всем функциям!
                    </p>
                    <div className={s.appDownload}>
                        <div className={s.qrcode}>
                            <Image src={qrcode} alt='Кью Ар Код - Скачать приложение' />
                        </div>
                        <ul className={`list-reset ${s.appstores}`}>
                            <li>
                                <Link href='#'>
                                    <a>
                                        <Appstore />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a>
                                        <GooglePlay />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a>
                                        <AppGallery />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};
