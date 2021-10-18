import {aos} from "./modules/aos.module";
import {menu} from "./modules/menu.module";
import {copyright} from "./modules/copyright.module";
import {slider} from "./modules/slider.module";

window.addEventListener('DOMContentLoaded', () => {
    aos();
    menu();
    copyright();
    slider();
})
