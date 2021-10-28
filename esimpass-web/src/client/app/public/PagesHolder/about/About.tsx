import s from './About.module.scss';
import {Container} from "../../../components/container/Container";

import {Button} from "../../../components/button/Button";
import slide from '../../../../resources/img/aboutslide-1.jpg';

import {STATE_API} from "../../../../redux/StateApi";
import Image from "next/image";

export const About = () => {

    const handleOpenPartnersModal = () => {
        STATE_API.showPublicWizard('partners')
    }

    return (
        <main className="main">
            <section className={s.about}>
                <Container className={`${s.container}`}>
                    <h2 className={s.title}>О Глонасс Мобайл</h2>
                    <div className={s.content}>
                        <div className={s.col}>
                            <h3>Сфера деятельности Глонасс Мобайл</h3>
                            <p>Телекоммуникации и информационные технологии. Мы разрабатываем программное обеспечение
                                для
                                оказания услуг свзи по технологиям eSIM, создаем платформенные решения для оказания
                                дополнительных услуг связи, а также делаем проекты под ключ для MNO, MVNO и IoT
                                провайдеров.</p>
                        </div>
                        <div className={s.col}>
                            <h3>Наша миссия и стратегия</h3>
                            <p>Предоставлять услуги связи по оптимальной стоимости и использование только инновационных
                                технологий и бизнес-моделей!</p>
                        </div>
                        <Button onClick={handleOpenPartnersModal}>Хочу сотрудничать</Button>
                    </div>
                    <div className={s.slider}>
                        <Image src={slide} alt="About" aria-hidden={true}/>
                    </div>
                </Container>
            </section>
        </main>
    )
}
