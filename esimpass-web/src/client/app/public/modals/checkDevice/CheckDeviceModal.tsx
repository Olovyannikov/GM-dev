import s from './CheckDeviceModal.module.scss';
import {Container} from "../../../components/container/Container";
import {ModalDesktop} from "./modalDesktop/ModalDesktop";
import {ModalMobile} from "./modalMobile/ModalMobile";
import {STATE_API} from "../../../../redux/StateApi";

interface CheckDeviceModalModel {
    mode?: string;
}

export const CheckDeviceModal = (props: CheckDeviceModalModel) => {

    return (
        <>
            <section onClick={e => e.stopPropagation()} className={`${s.deviceModal} ${props.mode === 'checkDevice' ? s.active : ''}`}>
                <Container className={s.modalContainer}>
                    <div className={s.top}>
                        <h2 className={s.title}>eSIM и мое устройство совместимы?</h2>
                        <button onClick={STATE_API.hideModal} className={`${s.burger} ${s.active}`}/>
                    </div>
                    <ModalMobile/>
                    <ModalDesktop/>
                </Container>
            </section>
        </>
    )
}
