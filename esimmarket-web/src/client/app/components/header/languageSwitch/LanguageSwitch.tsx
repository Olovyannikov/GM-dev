import s from './LanguageSwitch.module.scss';
import { useState } from 'react';

export const LanguageSwitch = () => {

    const [isRu, setIsRu] = useState(false);

    return (
        <div className={s.switch}>
            <button className={isRu ? s.active : ''}
                    onClick={() => setIsRu(true)}
            >
                Рус
            </button>
            <button className={isRu ? '' : s.active}
                    onClick={() => setIsRu(false)}
            >
                Eng
            </button>
        </div>
    );
};
