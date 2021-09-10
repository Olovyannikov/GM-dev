import s from './TransactionDetails.module.scss';
import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { Button } from '../../../../components/button/Button';

interface TransactionDetailsModel {
    isOpen?: boolean;
    toggle?: any;
}

export const TransactionDetails = (props: TransactionDetailsModel) => {

    const date = new Date();

    useEffect(() => {
        try {
            document.querySelectorAll('.react-datepicker__input-container')
                .forEach(input => {
                    input.querySelector('input').getAttribute('value') == '' ?
                        input.classList?.remove('active') : input.classList?.add('active');
                });

            document.body.addEventListener('click', () => {
                document.querySelector('.react-datepicker__month-read-view')?.getAttribute('style') == 'visibility: visible;' ?
                    document.querySelector('.react-datepicker__month-read-view')?.classList.remove('active') :
                    document.querySelector('.react-datepicker__month-read-view')?.classList.add('active');

                document.querySelector('.react-datepicker__year-read-view')?.getAttribute('style') == 'visibility: visible;' ?
                    document.querySelector('.react-datepicker__year-read-view')?.classList.remove('active') :
                    document.querySelector('.react-datepicker__year-read-view')?.classList.add('active');
            });
        } catch (e) {
        }


    });

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates: [any, any]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <aside className={`${s.aside} ${props.isOpen ? s.active : ''}`}>
            <button
                className={s.close}
                type='button'
                aria-label='Закрыть боковое меню'
                onClick={() => props.toggle(false)}
            />
            <h3 className={s.title}>Запросить детальную историю</h3>
            <p className={s.descr}>Детальная история по использованию тарифов и транзакциям будет отправлена на вашу
                почту.</p>
            <div className={`${s.input} ${s.start}`}>
                <ReactDatePicker
                    dateFormat='dd.MM.yyyy'
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    endDate={endDate}
                    showMonthDropdown
                    locale={ru}
                    disabled
                />
            </div>
            <div className={`${s.input} ${s.end}`}>
                <ReactDatePicker
                    dateFormat='dd.MM.yyyy'
                    selected={endDate}
                    onChange={(date: any) => setEndDate(date)}
                    endDate={endDate}
                    locale={ru}
                    disabled
                />
            </div>
            <div className={s.calendar}>
                <ReactDatePicker
                    dateFormat='dd.MM.yyyy'
                    showMonthDropdown
                    showYearDropdown
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    locale={ru}
                    nextMonthButtonLabel={'Следующий'}
                    previousMonthButtonLabel={'Предыдущий'}
                    minDate={new Date(2020, 1, 31)}
                    maxDate={new Date(date.getFullYear(), 12, 31)}
                />
            </div>
            {startDate && endDate ?
                <div className={s.bottom}>
                    <small>Выбрана дата</small>
                    <p>
                        От {startDate.toLocaleDateString()} - до {endDate.toLocaleDateString()}
                    </p>
                    <Button>Пришлите мне на почту</Button>
                </div> : ''}
        </aside>
    );
};
