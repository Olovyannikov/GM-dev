import s from './PersonalData.module.scss';
import {BackArr, UploadIcon} from '../../../../components/icons';
import {Button} from '../../../../components/button/Button';
import Link from 'next/link';

interface PersonalDataModel {
    back?: any;
}

export const PersonalData = (props: PersonalDataModel) => {

    return (
        <div className={s.personalData}>
            <button className={s.back} type="button" onClick={() => props.back(false)}>
                <BackArr stroke={'#000'}/>
                Изменить персональные данные
            </button>
            <form className={s.form}>
                <div className={s.formSection}>
                    <h5>Личные данные</h5>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Имя</span>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Фамилия</span>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Отчество</span>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Дата рождения</span>
                        <small>01.01.2001</small>
                    </label>
                </div>

                <div className={s.formSection}>
                    <h5>Адрес проживания</h5>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Страна</span>
                        <small>Россия</small>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Город</span>
                        <small>г. Москва</small>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Улица</span>
                        <small>ул. Тверская</small>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Дом</span>
                        <small>д. 53, к. 1</small>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Квартира</span>
                    </label>
                </div>

                <div className={s.formSection}>
                    <h5>Паспортные данные</h5>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Номер и серия паспорта</span>
                        <small>0000 0000</small>
                    </label>
                    <label className={'label full'}>
                        <input className={'input'} type="text" required/>
                        <span>Дата выдачи</span>
                        <small>01.01.2001</small>
                    </label>
                </div>
                <label role={'button'} className={s.fileUpload}>
                    <UploadIcon/>
                    <input className={`visually-hidden`} type="file"/>
                    <span>Загрузить фотографию паспорта</span>
                </label>
                <label className={s.checkbox}>
                    <input type="checkbox"/>
                    <span/>
                    <p>Я согласен с <Link href={"#"}><a>Пользовательским соглашением</a></Link></p>
                </label>
                <Button>Сохранить изменения</Button>
            </form>
        </div>
    )
}
