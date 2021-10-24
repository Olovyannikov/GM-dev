export const modal = () => {
    const $showBtn = document.querySelector('#modal-show');
    const $closeModal = document.querySelector('#close-modal');
    const $modal = document.querySelector('#modal');

    const showModalHandler = () => {
        $modal.classList.add('ecosystem__distributors-image--active');
    }

    const closeModalHandler = () => {
        $modal.classList.remove('ecosystem__distributors-image--active');
    }

    $showBtn?.addEventListener('click', showModalHandler);
    $closeModal?.addEventListener('click', closeModalHandler);
}
