import Swiper from 'swiper';
import 'swiper/css/bundle';

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
  },
});
