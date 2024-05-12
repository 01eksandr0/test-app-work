import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.hero', {
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.hero_btn_next',
      prevEl: '.hero_btn_prew',
    },
  });
});
