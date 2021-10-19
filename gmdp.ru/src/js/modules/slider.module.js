import Swiper from "swiper/swiper-bundle";

export const slider = () => {
    const buttons = document.querySelectorAll('.slider-gmdp__btn');
    const circlesContainer = document.querySelector('.circles');
    const circles = document.querySelectorAll('.circles__cross-wrap');
    buttons[0]?.classList.add('slider-gmdp__btn--active');

    const slider = new Swiper('.slider-gmdp__wrapper', {
        effect: 'fade',
        navigation: {
            nextEl: '.slider-gmdp__arrow-next',
            prevEl: '.slider-gmdp__arrow-prev'
        },
        pagination: {
            el: '.slider-gmdp__bullets',
            type: 'bullets'
        },
        on: {
            slideChange: (swiper) => {
                buttons.forEach(btn => {
                    btn.classList.remove('slider-gmdp__btn--active');
                });
                buttons[swiper.activeIndex].classList.add('slider-gmdp__btn--active');
                if (swiper.activeIndex !== 0) {
                    circlesContainer.setAttribute('data-id', swiper.activeIndex);
                } else {
                    circlesContainer.setAttribute('data-id', "-1");
                }
            }
        }
    });

    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(btn => btn.classList.remove('slider-gmdp__btn--active'));
            e.target.classList.add('slider-gmdp__btn--active');
            slider.slideTo(idx);
        });
    });

    circles.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            slider.slideTo(idx + 1);
        })
    });
}

