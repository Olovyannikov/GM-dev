export const menu = () => {
    const $body = document.body;
    const $burgerBtn = document.querySelector('#burger');
    const $navigation = document.querySelector('#navigation');
    const $links = document.querySelectorAll('.navigation__link');
    const $registrationBtn = document.querySelector('.navigation__button');
    const menuOpenClass = 'menu--open';
    const route = window.location.pathname.split('/')[1];

    const getHeight = (element) => {
        if (element.style.maxHeight === "0px" || +element.style.maxHeight === 0) {
            element.style.maxHeight = element.scrollHeight + 'px';
        } else {
            element.style.maxHeight = "0px";
        }
    }

    const toggleMenuHandler = () => {
        if ($body.classList.contains(menuOpenClass)) {
            $body.classList.remove(menuOpenClass);
            $burgerBtn.classList.remove('header__burger--active');
            $navigation.classList.remove('navigation--active');
            getHeight($navigation);
        } else {
            $body.classList.add(menuOpenClass);
            $burgerBtn.classList.add('header__burger--active');
            $navigation.classList.add('navigation--active');
            getHeight($navigation);
        }
    }

    $burgerBtn.addEventListener('click', toggleMenuHandler);

    $links.forEach((link, idx) => {
        if (route === '' || route === 'index.html') {
            $registrationBtn.classList.add('btn-link');
            $links[0].classList.add('navigation__link--active');
        } else if (route === 'gsm.html') {
            $registrationBtn.classList.add('btn-gsm');
            $links[1].classList.add('navigation__link--active', 'navigation__link--gsm');
        } else if (route === 'maintainers.html') {
            $registrationBtn.classList.add('btn-maintainers');
            $links[2].classList.add('navigation__link--active', 'navigation__link--maintainers');
        } else if (route === 'distributors.html') {
            $registrationBtn.classList.add('btn-distributors');
            $links[3].classList.add('navigation__link--active', 'navigation__link--distributors');
        }
    });


}
