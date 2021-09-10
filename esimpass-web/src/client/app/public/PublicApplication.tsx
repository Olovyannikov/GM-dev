import * as React from "react";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {PagesHolder} from "./PagesHolder/PagesHolder";
import { Modals } from "./modals/Modals";



export const PublicApplication = () => {

    return (
        <>
            <Header/>
            <PagesHolder/>
            <Modals />
            <Footer/>
        </>
    )
}
