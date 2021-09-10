import s from './DeviceOptions.module.scss';
import {Modal} from "../../../../../../../components/modal/Modal";
import {LaptopIcon, PadIcon, SmartphoneIcon, WatchIcon} from "../../../../../../../components/icons";
import {Button} from "../../../../../../../components/button/Button";

interface DeviceOptionsModel {
    active?: boolean,
    setActive?: any;
}

export const DeviceOptions = (props: DeviceOptionsModel) => {
    return (
        <Modal active={props.active} setActive={() => props.setActive(!props.active)} className={s.deviceModalContent}>
            <div className={s.top}>
                <h3>Редактировать устройство</h3>
                <button onClick={() => props.setActive(false)} className={`${s.burger} ${s.active}`}/>
            </div>
            <div className={s.block}>
                <h4>1. Выберите иконку для устройства</h4>
                <ul>
                    <li className={s.active}>
                        <button><SmartphoneIcon/></button>
                    </li>
                    <li><button><PadIcon/></button></li>
                    <li><button><WatchIcon/></button></li>
                    <li><button><LaptopIcon/></button></li>
                </ul>
            </div>
            <div className={s.block}>
                <h4>2. Дайте имя устройству</h4>
                <form>
                    <label className={`label full ${s.deviceModel}`}>
                        <input required type="text" className="input"/>
                        <span>Введите модель устройства</span>
                    </label>
                    <label className="label full">
                        <input required type="text" className="input"/>
                        <span>Назовите устройство</span>
                    </label>
                    <Button>Применить</Button>
                </form>
            </div>
        </Modal>
    )
}
