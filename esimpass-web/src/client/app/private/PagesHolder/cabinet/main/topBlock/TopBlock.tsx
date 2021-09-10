import * as React from 'react';
import s from './TopBlock.module.scss';
import {Balance} from './balance/Balance';
import {MyDevices} from './myDevices/MyDevices';
import {More} from "../../../../components/more/More";
import {Sidebar} from "../../../../components/sidebar/Sidebar";
import {useState} from "react";
import {DeviceInfo} from "./deviceInfo/DeviceInfo";

export const TopBlock = () => {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [optionsModal, setOptionsModal] = useState(false);
    const [disableModal, setDisableModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    const [object, setObjectKeys] = useState({
        title: 'Манебус',
        type: 'iPhone X',
        status: 'Активен',
        agent: 'tel'
    });

    return (
        <>
            <div className={s.topblock}>
                <h2 className={s.title}>Моя eSIM</h2>
                <div className={s.grid}>
                    <MyDevices
                        setData={setObjectKeys}
                        setSidebarActive={setSidebarActive}
                        getOptions={optionsModal}
                        setOptions={setOptionsModal}
                        getDisable={disableModal}
                        setDisable={setDisableModal}
                        getDelete={deleteModal}
                        setDelete={setDeleteModal}
                    />
                    <Balance/>
                </div>

            </div>
            <Sidebar
                position={'right'}
                active={sidebarActive}
                trigger={setSidebarActive}
            >
                <More getDelete={setDeleteModal} getDisable={setDisableModal} getOptions={setOptionsModal}/>
                <DeviceInfo data={object}/>
            </Sidebar>
        </>
    );
};
