import AOS from 'aos';

export const aos = () => {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        delay: 100,
        duration: 300,
        easing: 'linear',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
}
