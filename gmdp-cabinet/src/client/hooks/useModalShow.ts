import React from "react";

export const useModalShow = (initVal: boolean): boolean => {
    const [show, setShow] = React.useState(initVal);
    React.useEffect(() => setShow(true), []);

    return show;
}