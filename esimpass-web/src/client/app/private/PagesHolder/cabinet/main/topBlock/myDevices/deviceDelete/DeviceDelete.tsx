import s from './DeviceDelete.module.scss';
import {Modal} from '../../../../../../../components/modal/Modal';
import {Button} from '../../../../../../../components/button/Button';

interface DeviceDeleteModel {
    active?: boolean,
    setActive?: any;
}

export const DeviceDelete = (props: DeviceDeleteModel) => {

    return (
        <Modal active={props.active} className={s.deviceModalContent} setActive={() => props.setActive(!props.active)}>
            <div className={s.top}>
                <h3>Удалить устройство</h3>
                <button onClick={() => props.setActive(false)} className={`${s.burger} ${s.active}`}/>
            </div>
            <div className={s.main}>
                <p>Вы действительно хотите удалить это устройство? Все купленные пакеты интернета на этом устройстве
                    будут удалены без возврата средств.</p>
            </div>
            <div className={s.controls}>
                <Button onClick={() => props.setActive(false)}>Отменить</Button>
                <Button>Удалить</Button>
            </div>
        </Modal>
    )
}
