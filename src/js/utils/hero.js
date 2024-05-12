import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.hero', {
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.hero_btn_next',
      prevEl: '.hero_btn_prew',
    },
  });
});
