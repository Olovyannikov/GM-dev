import s from './Search.module.scss';
import sprite from '../../../../../resources/img/sprite/sprite.svg';

export const Search = () => {
    return (
        <label className={s.search}>
            <svg width="20" height="20" className={s.searchIcon}>
                <use href={`${sprite.src}#search`}/>
            </svg>
            <input type='text' placeholder="Поиск" />
        </label>
    )
}
