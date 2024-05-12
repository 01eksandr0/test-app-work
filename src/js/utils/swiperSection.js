import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import sprite from '../../assets/images/icons/symbol-defs.svg';
import cart1 from '../../assets/images/swiper/cart2.jpg';
import cart2 from '../../assets/images/swiper/cart3.jpg';
import cart3 from '../../assets/images/swiper/cart4.jpg';
import back from '../../assets/images/swiper/ingBack.png';

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

Swiper.use([Scrollbar]);
function createSwiper() {
  const block = document.querySelector('.swiper_second');

  const images = [cart1, cart2, cart3, cart1, cart2, cart3];

  const list = images.reduce((html, item) => {
    return (
      html +
      ` <div class="swiper_item swiper-slide">
          <img
            class="swiper_item_img"
            src="${item}"
            alt=""
            width="327"
            height="213"
          />
          <img
            class="swiper_item_img_back"
            src="${back}"
            alt=""
            width="327"
            height="213"
          />
          <div class="swiper_item_content">
            <h3 class="swiper_item_title">Primary Schools</h3>
            <p class="swiper_item_text">
              Whether you're a teacher, leader, or support staff member, we
              connect talented individuals with opportunities in all-through
              schools, ensuring a cohesive and supportive learning experience for
              students across all age groups.
            </p>
            <a href="#" class="swiper_item_link"
              >View Opportunities
              <span class="swiper_item_btn"
                ><svg width="12" height="9">
                  <use
                    href="${sprite}#icon-arrow-right2"
                  ></use></svg></span
            ></a>
          </div>
        </div>`
    );
  }, '');

  block.insertAdjacentHTML('afterbegin', list);

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
