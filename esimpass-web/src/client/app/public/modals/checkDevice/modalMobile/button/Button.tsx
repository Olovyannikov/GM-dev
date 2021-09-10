import s from "./Button.module.scss";
import {Chevron} from "../../../../../components/icons";
import * as React from "react";
import {MouseEventHandler} from "react";

interface ButtonModel {
    toggleDevice?: MouseEventHandler;
    title?: string;
    active?: boolean;
    placeholder?: string;
    onClick?: any;
}

export const Button = (props: ButtonModel) => {

    return (
            <button type={'button'} style={props.active ? {display: 'flex'} : {display: 'none'} }
                    className={`btn-reset ${s.selectBtn}`} onClick={props.toggleDevice}>
                <span className={props.title ? s.smallTitle : s.btnTitle}>{props.placeholder}</span>
                {props.title ? <span className={s.btnTitle}>{props.title}</span> : ''}
                <Chevron/>
            </button>
    )
}
