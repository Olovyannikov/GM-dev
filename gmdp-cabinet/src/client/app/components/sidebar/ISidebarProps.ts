import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ISidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    isActive: boolean,
}
