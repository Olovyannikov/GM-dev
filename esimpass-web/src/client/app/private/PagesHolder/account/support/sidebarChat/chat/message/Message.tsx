import s from './Message.module.scss';

interface MessageModel {
    message?: any;
    time?: any;
    dateTime?: any;
    isFile?: any;
}

export const Message = (props: MessageModel) => {
    return (
        <div className={`${s.message}`}>
            {props.isFile ?
                <div className={s.files}>
                    <div className={s.icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 4C3.75 2.75736 4.75736 1.75 6 1.75H9.42105C11.216 1.75 12.6711 3.20507 12.6711 5V7.5C12.6711 8.74264 13.6784 9.75 14.9211 9.75H17C18.7949 9.75 20.25 11.2051 20.25 13V20C20.25 21.2426 19.2426 22.25 18 22.25H6C4.75736 22.25 3.75 21.2426 3.75 20V4Z" stroke="#B1B3C0" stroke-width="1.5"/>
                            <path d="M3.75 4C3.75 2.75736 4.75736 1.75 6 1.75H9.23393C11.6675 1.75 13.9769 2.82442 15.5444 4.68588L18.3105 7.97059C19.5631 9.45803 20.25 11.3401 20.25 13.2847V20C20.25 21.2426 19.2426 22.25 18 22.25H6C4.75736 22.25 3.75 21.2426 3.75 20V4Z" stroke="#B1B3C0" stroke-width="1.5"/>
                        </svg>
                    </div>
                    {props.message}
                </div>
                :
                <>
                    <p>{props.message}</p>
                    <time dateTime={props.dateTime}>{props.time}</time>
                </>
            }
        </div>
    )
}
