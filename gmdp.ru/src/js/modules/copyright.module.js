export const copyright = () => {
    const copyrightYear = document.querySelector('#currentYear');
    const footerCopy = document.querySelector('.footer__copy output');

    try {
        copyrightYear.innerHTML = `2008-${new Date().getFullYear()}`;
        footerCopy.innerHTML = `2008-${new Date().getFullYear()}`;
    } catch (e) {}
}
