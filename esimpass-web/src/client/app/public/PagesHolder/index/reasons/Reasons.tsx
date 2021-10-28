import s from './Reasons.module.scss';
import {Container} from "../../../../components/container/Container";
import {Airplane, BackArr, Bag, Clock, Dualsim, Globe, RU, Shield, Wallet} from "../../../../components/icons";
import {Button} from "../../../../components/button/Button";
import {scrollToTop} from 'utils';
import {STATE_API} from 'redux/StateApi';
import * as React from "react";


export const Reasons = () => (
    <section className={s.reasons} id="speciality">
        <Container>
            <h2 className={s.title}>
                8 причин оформить виртуальную eSIM
            </h2>
            <ul className={`list-reset ${s.list}`}>
                <li>
                    <div className={s.icon}>
                        <Wallet/>
                    </div>
                    <p>Льготные тарифы на мобильный интернет по ценам локальных операторов </p>
                </li>
                <li>
                    <div className={s.icon}>
                        <Dualsim/>
                    </div>
                    <p>eSIM не требует отдельного SIM-слота и используется в смартфоне как вторая SIM</p>
                </li>
                <li>
                    <div className={s.icon}>
                        <RU/>
                    </div>
                    <p>Российский номер всегда будет активен </p>
                </li>
                <li>
                    <div className={s.icon}>
                        <Airplane/>
                    </div>
                    <p>Нет абоненткой платы – оплата только при использовании в роуминге</p>
                </li>
                <li>
                    <div className={`${s.icon} ${s.custom}`}>
                        <Globe/>
                    </div>
                    <p>Работает в любой стране на сетях по 200+ мобильных операторов</p>
                </li>
                <li>
                    <div className={s.icon}>
                        <Clock/>
                    </div>
                    <p>Практически неограниченный срок действия eSIM </p>
                </li>
                <li>
                    <div className={s.icon}>
                        <Bag/>
                    </div>
                    <p>Можно выбрать пакет интернет-трафика местного оператора </p>
                </li>
                <li>
                    <div className={s.icon}>
                        <Shield/>
                    </div>
                    <p>eSIM всегда в телефоне, ее не получится потерять или забыть при экстренных сборах</p>
                </li>
                <li className={s.start}>
                    <h4>Начать пользоваться eSIM</h4>
                    <div className={s.controls}>
                        <Button onClick={() => STATE_API.showPublicWizard('auth')} size={'small'}
                                color={'dark'}>Подключить</Button>
                        <Button onClick={() => STATE_API.showPublicWizard('downloadApp')} size={'small'}
                                color={'secondary'}>Приложение</Button>
                    </div>
                    <small>Для того, чтобы виртуальная eSIM была активна, необходимо
                        хотя бы 1 раз в 2 года совершать платную транзакцию от ХХ руб. </small>
                </li>
            </ul>
            <div className={s.controls}>
                <Button className={s.order} color="primary">Заказать стандартную SIM-карту</Button>
                <Button className={s.toTop} color={'secondary'} onClick={scrollToTop}>
                    <><BackArr/> В начало</>
                </Button>
            </div>
        </Container>
    </section>
)
