import s from './Progress.module.scss';

interface ProgressModel {
    item?: any;
    className?: any;
}

export const Progress = (props: ProgressModel) => {
    return (
        <div className={`${s.progress} ${props.className}`}>
            <span className={s.progressText}>
                <span style={{color: props.item.less / props.item.price * 100 > 50 ? '#000' : '#e40101'}}>
                    {props.item.less >= 1000 ? props.item.less / 1000 + ' ГБ' : props.item.less + ' МБ'} /</span> <span>{props.item.price / 1000} ГБ</span>
            </span>
            {props.item.less > 0 && props.item.time !== 'Неактивен' ?
                <div className={s.progressBar}>
                    <span style={{
                        width: props.item.less / props.item.price * 100 + '%',
                        background: props.item.less / props.item.price * 100 < 50 ? '#E40101' : '#B9F348'
                    }} className={s.progressActive}/>
                </div>
                : ''}
        </div>
    )
}
