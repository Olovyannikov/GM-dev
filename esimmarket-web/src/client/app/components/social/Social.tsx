import s from './Social.module.scss';
import sprite from '../../../resources/img/sprite/sprite.svg';
import { ISocialProps } from './ISocial';
import cn from 'classnames';

export const Social = ({inverted = false, className}: ISocialProps) => {
    return (
        <div className={cn(s.social, className, inverted ? s.inverted : '')}>
            <h5>Мы в соц. сетях</h5>
            <ul className={s.list}>
                <li>
                    <a href="#">
                        <svg width={25} height={25}><use href={`${sprite.src}#fb`}/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width={25} height={25}><use href={`${sprite.src}#vk`}/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width={25} height={25}><use href={`${sprite.src}#in`}/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width={25} height={25}><use href={`${sprite.src}#yt`}/></svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}
