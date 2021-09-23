import {Simicon} from 'app/components/icons';
import {Container} from 'app/private/components/container/Container';
import * as React from 'react';
import s from './ActivationCarrier.module.scss';

export const ActivationCarrier = () => {

    return (
        <section className={s.activation}>
            <Container>
                <button className={s.back}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M9.71875 5L3.00168 12L9.71875 19" stroke="black" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="1" y1="-1" x2="16.7331" y2="-1" transform="matrix(1 0 0 -1 3.26562 11.0317)"
                                  stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </g>
                    </svg>
                    Назад
                </button>
                <div className={s.cards}>
                    <button className={`${s.card} ${s.new}`}>
                        <Simicon/>
                        <span>+ Создать новую eSIM/SIM</span>
                    </button>
                    <button className={`${s.card} ${s.activate}`}>
                        <Simicon/>
                        <span>Активировать eSIM/SIM</span>
                    </button>
                </div>
            </Container>
        </section>
    )
}
