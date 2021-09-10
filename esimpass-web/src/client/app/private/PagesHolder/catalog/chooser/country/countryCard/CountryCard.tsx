import s from './CountryCard.module.scss';
import { Chevron, DateIcon, EarthIcon } from '../../../../../../components/icons';

interface CountryCardModel {
    isActive?: boolean;
    toggle?: any;
    countryName?: string;
    flag?: string;
}

export const CountryCard = (props: CountryCardModel) => {
    return (
        <div className={s.countryCard}>
            <button aria-label='Закрыть боковое меню' onClick={props.toggle} className={`${s.burger} ${s.active}`}
                    type={'button'} />
            <div className={s.top}>
                <div className={s.flag}>
                    <span className={`${s.flagIcon} flag-icon-${props.flag.toLowerCase()}`} />
                    <span>{props.countryName}</span>
                </div>
                <div className={s.controls}>
                    <button aria-label='Предыдущая страна по алфавиту' type={'button'}
                            className={`${s.controlBtn} ${s.prev}`}><Chevron /></button>
                    <button aria-label='Следующая страна по алфавиту' type={'button'}
                            className={`${s.controlBtn} ${s.next}`}><Chevron /></button>
                </div>
            </div>
            <div className={s.info}>
                <button className={s.card} type={'button'}>
                    <div className={s.cardTop}>
                        <div>
                            <h4 className={s.cardTitle}>Mama Mia</h4>
                            <span>Prepaid</span>
                        </div>
                        <p>630 ₽</p>
                    </div>
                    <div className={s.cardBottom}>
                        <div className={s.cardBadge}>
                            <span className={s.cardBadgeName}>100 МБ</span>
                            <span className={s.cardBadgeTitle}>трафик</span>
                            <EarthIcon />
                        </div>
                        <div className={s.cardBadge}>
                            <span className={s.cardBadgeName}>30 дней</span>
                            <span className={s.cardBadgeTitle}>срок действия</span>
                            <DateIcon />
                        </div>
                    </div>
                </button>
                <button className={s.card} type={'button'}>
                    <div className={s.cardTop}>
                        <div>
                            <h4 className={s.cardTitle}>Mama Mia</h4>
                            <span>Prepaid</span>
                        </div>
                        <p>630 ₽</p>
                    </div>
                    <div className={s.cardBottom}>
                        <div className={s.cardBadge}>
                            <span className={s.cardBadgeName}>100 МБ</span>
                            <span className={s.cardBadgeTitle}>трафик</span>
                            <EarthIcon />
                        </div>
                        <div className={s.cardBadge}>
                            <span className={s.cardBadgeName}>30 дней</span>
                            <span className={s.cardBadgeTitle}>срок действия</span>
                            <DateIcon />
                        </div>
                    </div>
                </button>
                <button className={s.card} type={'button'}>
                    <div className={s.cardTop}>
                        <div>
                            <h4 className={s.cardTitle}>Mama Mia</h4>
                            <span>Prepaid</span>
                        </div>
                        <p>630 ₽</p>
                    </div>
                    <div className={s.cardBottom}>
                        <div className={s.cardBadge}>
                            <span className={s.cardBadgeName}>100 МБ</span>
                            <span className={s.cardBadgeTitle}>трафик</span>
                            <EarthIcon />
                        </div>
                        <div className={s.cardBadge}>
                            <span className={s.cardBadgeName}>30 дней</span>
                            <span className={s.cardBadgeTitle}>срок действия</span>
                            <DateIcon />
                        </div>
                    </div>
                </button>

            </div>
        </div>
    );
};
