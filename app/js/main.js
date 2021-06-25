document.querySelector('.faq-accordion').addEventListener('click', (event) => {
  if (event.target.closest('.faq-accordion__item')) {
    event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
  }
});

document.querySelector('.btn-burger').addEventListener('click', (event) => {
  document
    .querySelector('.main-navigation__inner-wrap')
    .classList.toggle('main-navigation__inner-wrap--active');
  document.querySelector('.section-header').classList.toggle('section-header--active');
  document.querySelector('body').classList.toggle('body--active');
});

const swiper = new Swiper('.section-hero-image', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new Swiper('.slider-blog-container', {
  // If we need pagination
  pagination: {
    el: '.dots-blog',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-blog--next',
    prevEl: '.btn-blog--prev',
  },
});

new Swiper('.slider-quotes-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.section-quotes .dots',
    clickable: true,
  },
});
