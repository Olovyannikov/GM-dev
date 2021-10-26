export const tabs = () => {
    const $tabsControls = document.querySelectorAll('.tabs__button');
    const $tabsItems = document.querySelectorAll('.tabs__item');

    const btnActiveClass = 'tabs__button--active';
    const tabActiveClass = 'tabs__item--active';

    const removeClasses = () => {
        $tabsControls.forEach(btn => btn.classList.remove('tabs__button--active'));
        $tabsItems.forEach(item => item.classList.remove('tabs__item--active'));
    }

    const addClass = (item, className) => {
        item.classList.add(className);
    }

    $tabsControls.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            removeClasses();
            addClass(e.target, btnActiveClass);
            addClass($tabsItems[idx], tabActiveClass);
        });
    });
}
