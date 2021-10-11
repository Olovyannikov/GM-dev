import { ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface IBurgerProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isActive?: boolean
}
