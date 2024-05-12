import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Scrollbar]);
function createSwiper() {
  new Swiper('.swiper_swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper_btn_next',
      prevEl: '.swiper_btn_prew',
    },
    on: {
      slideChange: function () {
        document.querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.classList.remove('active');
        });

        this.slides[this.activeIndex].classList.add('active');
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', createSwiper);
