import {sendForm} from "../services/sendForm.service";

export const form = (formID) => {
    const form = document.getElementById(formID);
    const formBtn = form?.querySelector('button');

    formBtn?.addEventListener('click', e => {
        e.preventDefault();

        const setFormState = () => {
            setTimeout(() => {
                form.reset();
                formBtn.classList.remove('not-allowed');
                formBtn.innerText = 'Отправить сообщение';
            }, 5000);
        }

        sendForm({
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            company: form.company.value,
        }).then(result => {

            if (result) {
                formBtn.classList.add('not-allowed');
                formBtn.innerText = 'Сообщение отправлено';

                setFormState();
            } else {
                formBtn.classList.add('not-allowed');
                formBtn.innerText = 'Что-то пошло не так';

                setFormState();
            }
        })
    })
}
