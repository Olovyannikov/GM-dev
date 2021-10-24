export const copyright = () => {
    const copyrightYear = document.querySelector('#currentYear');

    try {
        copyrightYear.innerHTML = `2008-${new Date().getFullYear()}`;
    } catch (e) {}
}
