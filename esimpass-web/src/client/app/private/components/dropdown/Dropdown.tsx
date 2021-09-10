import * as React from "react";
import s from './Dropdown.module.scss';
import {Chevron} from "../../../components/icons";

interface DropdownModel {
    items?: any,
    getType?: any,
    getIcon?: any,
    title?: string,
    className?: string
}

export const useLoaded = () => {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => setLoaded(true), []);
    return loaded;
};

export const Dropdown = (props: DropdownModel) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState<React.SetStateAction<any>>(null);
    const [icon, setIcon] = React.useState(null);
    const loaded = useLoaded();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    React.useEffect(() => {
        isOpen ? document.body.classList.add('overlay-dropdown') :
            document.body.classList.remove('overlay-dropdown')

        document.body.addEventListener('click', (e: any) => {
            e.target.classList.contains('overlay-dropdown') ?
                setIsOpen(false) : ''
        })
    });

    return (
        <div className={`${s.dropdown} ${props.className}`}>
            <button className={`${s.btn} ${title ? s.active : ''}`} type={'button'} onClick={toggleOpen}>
                <div>
                    <span>{icon}</span>
                    <span>{title || props.title || 'Способ доставки'}</span>
                </div>
                <Chevron rotate={isOpen ? -90 : 90}/>
            </button>
            <ul className={`${s.dropdownList} ${isOpen ? 'block' : 'hidden'}`}>
                {loaded && props.items ? props.items.map((item: any, id: any) => (
                    <li className={s.dropdownItem} key={id}>
                        <button
                            className={s.dropdownBtn}
                            onClick={() => {
                                setTitle(`${item.name}`);
                                props.getType(item.type);
                                setIsOpen(false);
                                setIcon(item.icon);
                            }}
                            type="button">
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    </li>
                )) : ''}
            </ul>
        </div>
    )
}
