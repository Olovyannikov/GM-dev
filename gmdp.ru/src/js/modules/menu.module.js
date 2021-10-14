export const menu = () => {
    const $body = document.body;
    const $header = document.querySelector('#header');
    const $burgerBtn = document.querySelector('#burger');
    const $navigation = document.querySelector('#navigation');
    const menuOpenClass = 'menu--open';

    console.log($navigation.scrollHeight)

    const getHeightHandler = (element) => {
        if (element.style.maxHeight === "0px" || +element.style.maxHeight === 0) {
            element.style.maxHeight = element.scrollHeight + 'px';
        } else {
            element.style.maxHeight = "0";
        }
    }

    const toggleMenuHandler = () => {
        if ($body.classList.contains(menuOpenClass)) {
            $body.classList.remove(menuOpenClass);
            $burgerBtn.classList.remove('header__burger--active');
            $navigation.classList.remove('navigation--active');
            getHeightHandler($navigation);
        } else {
            $body.classList.add(menuOpenClass);
            $burgerBtn.classList.add('header__burger--active');
            $navigation.classList.add('navigation--active');
            getHeightHandler($navigation);
        }
    }

    $burgerBtn.addEventListener('click', toggleMenuHandler);
}
