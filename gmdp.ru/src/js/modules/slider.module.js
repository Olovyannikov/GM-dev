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

            if (btn.closest('[data-id]').getAttribute('data-id') === "-1") {
                slider.slideTo(idx + 1);
            } else {
                slider.slideTo(0);
            }
        });
    });

    const sliderFeatures = new Swiper('.slider__wrapper', {
        containerClass: 'slider__wrapper',
        wrapperClass: 'slider__content',
        slideClass: 'slider__slide',
        navigation: {
            nextEl: '.slider__button--next',
            prevEl: '.slider__button--prev'
        },
        bulletElement: 'slider__bullets',
        pagination: {
            el: '.slider__bullets',
            type: 'bullets'
        },
        disabled: false,
        spaceBetween: 24,
        on: {
            slideChange: (swiper) => {
                if (swiper.activeIndex + 1 === swiper.$wrapperEl[0].childElementCount) {
                    document.querySelector('.slider__button--next').removeAttribute('disabled')
                    document.querySelector('.slider__button--next').addEventListener('click', () => {
                        swiper.slideTo(0);
                    }, {once: true});
                }
            }
        },
        breakpoints: {
            992: {
                spaceBetween: 87,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
            }
        }
    });
}
