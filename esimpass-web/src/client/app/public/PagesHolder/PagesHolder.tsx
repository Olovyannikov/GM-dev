import {useRouter} from "next/router";
import {Index} from "./index/Index";
import {About} from "./about/About";

export const PagesHolder = () => {

    
    const router = useRouter();

    const doRender = () => {
        if (router.pathname === '/') {
            return <Index/>
        } else if (router.pathname === '/about') {
            return <About/>
        }
    }
    return doRender();
}
