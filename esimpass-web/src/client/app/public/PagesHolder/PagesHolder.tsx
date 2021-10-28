import {useRouter} from "next/router";
import {Index} from "./index/Index";
import {About} from "./about/About";
import {Policy} from "./policy/Policy";
import {Terms} from "./terms/Terms";
import {Refund} from "./refund/Refund";

export const PagesHolder = () => {

    const router = useRouter();

    const doRender = () => {
        if (router.pathname === '/') {
            return <Index/>
        } else if (router.pathname === '/about') {
            return <About/>
        } else if (router.pathname === '/policy') {
            return <Policy/>
        } else if (router.pathname === '/terms') {
            return <Terms/>
        } else if (router.pathname === '/refund') {
            return <Refund/>
        }
    }
    return doRender();
}
