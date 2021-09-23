import React from 'react';
import s from './Info.module.scss';
import Link from 'next/link';
import img from '../../../../../resources/img/svg/simSVG.svg';
import Image from 'next/image';
import {EmailModal} from '../emailModal/EmailModal';
import {PasswordModal} from '../passwordModal/PasswordModal';
import {Notification} from '../../../../components/notification/Notification';
import {
    BullhornIcon,
    Chevron,
    Dualsim,
    HelpIcon,
    LockGrayIcon,
    MailGrayIcon,
    NotificationIcon,
    ProfileGrayIcon,
    QuestionIcon,
    WifiIcon
} from 'app/components/icons';

interface InfoModel {
    setDataActive?: any;
    setFaqActive?: any;
    setSupportActive?: any;
    setInstructionActive?: any;
}

export const Info = (props: InfoModel) => {

    const [isEmailModal, setEmailModal] = React.useState<boolean>(false);
    const [isPasswordModal, setPasswordModal] = React.useState<boolean>(false);

    return (
        <div className={s.info}>
            <Notification active={true}>Вы получили ответ от службы поддержки!&nbsp;<Link href="#"><a>Перейти к ответу</a></Link></Notification>
            <h2 className={s.title}>Аккаунт</h2>
            <div className={s.top}>
                <div className={s.column}>
                    <div className={s.mainInfo}>
                        <h3 className={s.name}>Владислав</h3>
                        <small className={s.email}>winetoadd@gmail.com</small>
                    </div>
                    {/* Ниже - если ошибка заполнения данных, то есть класс s.error иначе нет */}
                    <div className={s.changeBtns}>
                        <button className={`${s.changeBtn} ${s.error}`} type="button"
                                onClick={() => props.setDataActive(true)}>
                            <ProfileGrayIcon/>
                            <div className={s.changeText}>
                                <span>Изменить персональные данные</span>
                                {/* Если ошибка - есть p иначе нет */}
                                <p className="error">Внесены не все данные</p>
                            </div>
                            <Chevron/>
                        </button>
                        <button className={`${s.changeBtn} ${s.error}`} type="button"
                                onClick={() => setEmailModal(true)}>
                            <MailGrayIcon/>
                            <div className={s.changeText}>
                                <span>Изменить почтовый адрес</span>
                                <p className="error">Нет почтового адреса</p>
                            </div>
                            <Chevron/>
                        </button>
                        <button className={s.changeBtn} type="button" onClick={() => setPasswordModal(true)}>
                            <LockGrayIcon/>
                            <div className={s.changeText}>
                                <span>Изменить пароль</span>
                            </div>
                            <Chevron/>
                        </button>
                    </div>
                </div>
                <div className={s.column}>
                    <h4>Памятка о работе eSIM</h4>
                    <ul className={s.notifyList}>
                        <li className={s.notifyItem}>
                            <NotificationIcon/>
                            <div className={s.notifyText}>
                                <h5>Уведомления</h5>
                                <p>Мы автоматически будем присылать уведомления об окончании пакета интернета на
                                    устройство</p>
                            </div>
                        </li>
                        <li className={s.notifyItem}>
                            <WifiIcon/>
                            <div className={s.notifyText}>
                                <h5>Автоматическая активация тарифа</h5>
                                <p>При вьезде в другую страну ваш пакет интернета будет активирован
                                    автоматически</p>
                            </div>
                        </li>
                        <li className={s.notifyItem}>
                            <HelpIcon/>
                            <div className={s.notifyText}>
                                <h5>Режим помегабайтной тарификации</h5>
                                <p>В случае окончания пакета интернета, мы автоматически включим режим
                                    помегабайтной
                                    тарификации, чтобы вы имели возможность подключить новый пакет
                                    интернета. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className={s.title}>Поддержка</h2>
            <div className={s.support}>
                <div className={s.supportBlocks}>
                    <button className={`${s.card} ${s.activation}`} onClick={() => props.setInstructionActive(true)}>
                        <Dualsim/>
                        <div className={s.cardText}>
                            <h5>Все о активации eSIM</h5>
                            <p>Полноценная инструкция по активации вашей персональной электронной
                                SIM-карты</p>
                        </div>
                        <span className={s.cardImg}>
                            <Image src={img}/>
                        </span>
                    </button>
                    <button className={`${s.card} ${s.faq}`} onClick={() => props.setFaqActive(true)}>
                        <QuestionIcon/>
                        <div className={s.cardText}>
                            <h5>Часто задаваемые вопросы</h5>
                            <p>Полноценная инструкция по активации вашей персональной электронной SIM-карты</p>
                        </div>
                    </button>
                    <button className={`${s.card} ${s.helpdesk}`} onClick={() => props.setSupportActive(true)}>
                        <BullhornIcon/>
                        <span className={s.helpdeskNotify}/>
                        <div className={s.cardText}>
                            <h5>Служба поддержки</h5>
                            <p>Полноценная инструкция по активации вашей персональной электронной SIM-карты</p>
                        </div>
                    </button>
                </div>
            </div>
            <EmailModal active={isEmailModal} setActive={setEmailModal}/>
            <PasswordModal active={isPasswordModal} setActive={setPasswordModal}/>
        </div>
    )
}
