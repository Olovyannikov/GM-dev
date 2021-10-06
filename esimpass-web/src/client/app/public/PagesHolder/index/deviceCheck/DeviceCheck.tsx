import s from './DeviceCheck.module.scss';
import {Container} from "../../../../components/container/Container";
import {Button} from "../../../../components/button/Button";
import background from '../../../../../resources/img/MainImage@2x.jpg';
import {FastInternetIcon, Globe, PhoneIcon, WifiIcon} from "../../../../components/icons";
import {STATE_API} from 'redux/StateApi';
import Image from "next/image";

export const DeviceCheck = () => {

    return (
        <section className={s.device}>
            <Container className={s.container}>
                <div className={s.content}>
                    <h2 className={s.title}>
                        Подключи eSIM-pass и путешествуй по миру без переплат!
                    </h2>
                    <h2 className={s.titleDesktop}>
                        Путешествуй <br/> c eSIM без переплат
                    </h2>
                    <div className={s.background}>
                        <div>
                            <Image src={background} alt="Путешествуй по миру без роуминга. Изображение."/>
                        </div>
                    </div>
                    <p className={s.descr}>
                        Подключение виртуальной eSIM не займет много времени, главное чтобы устройство поддерживало
                        технологию виртуальной eSIM.
                    </p>
                    <p className={s.descrDesktop}>
                        Подключи eSIM pass и путешествуй по миру без переплат за роуминг! <br/>
                        Подключение виртуальной eSIM не займет много времени, главное чтобы устройство поддерживало технологию виртуальной eSIM.
                    </p>
                    <div className={s.controls}>
                        <Button onClick={() => STATE_API.showPublicWizard('auth')} color={'primary'}>Подключить</Button>
                        <Button onClick={() => STATE_API.showPublicWizard('checkDevice')} color={'secondary'}>Моё
                            устройство подойдёт?</Button>
                    </div>
                </div>
                <ul className={`list-reset ${s.features}`}>
                    <li>
                        <PhoneIcon/>
                        <span>Не нужно никуда ехать,<br/> быстро оформим удаленно!</span>
                    </li>
                    <li>
                        <Globe/>
                        <span>Работает в 200 странах<br/> без роуминга</span>
                    </li>
                    <li>
                        <WifiIcon/>
                        <span>Раздача интернета <br/> без абонентской платы</span>
                    </li>
                </ul>
            </Container>
        </section>
    )
}
