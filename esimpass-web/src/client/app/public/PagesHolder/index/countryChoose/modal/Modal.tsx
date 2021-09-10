import s from "./Modal.module.scss";
import {Container} from "../../../../../components/container/Container";
import {BackArr} from "../../../../../components/icons";
import {MouseEventHandler} from "react";

interface ModalModel {
    isActive?: boolean;
    toggleModal?: MouseEventHandler;
    countryList?: JSX.Element
    search? : JSX.Element;
}

export const Modal = (props: ModalModel) => {
    return (
        <div className={`${s.countryModal} ${props.isActive ? s.active : ''}`}>
            <Container>
                <div className={s.top}>
                    <div className={s.preheader}>
                        <button onClick={props.toggleModal} className={`btn-reset`}><BackArr/></button>
                        <h2>Выберите страну</h2>
                    </div>
                </div>
                <div className={s.main}>
                    {props.search}
                </div>
            </Container>
        </div>
    )
}
