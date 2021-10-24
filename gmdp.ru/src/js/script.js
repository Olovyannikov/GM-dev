import {aos} from "./modules/aos.module";
import {menu} from "./modules/menu.module";
import {copyright} from "./modules/copyright.module";
import {slider} from "./modules/slider.module";
import {form} from "./modules/form.module";
import {modal} from "./modules/modal.module";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    copyright();
    slider();
    form('connect');
    modal();
    aos();
})
