export const copyright = () => {
    const copyrightYear = document.querySelector('#currentYear');

    copyrightYear.innerHTML = `2008-${new Date().getFullYear()}`;
}
