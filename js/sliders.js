new Swiper(".port-info-slider", {
  lazy: true,
  loop: true,
  speed: 350,
  slidesPerView: 1.35,
  spaceBetween: 15,
  navigation: {
    nextEl: ".port-info-slider__right-arrow",
    prevEl: ".port-info-slider__left-arrow",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3.3,
    },
    850: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2.3,
    },
    490: {
      slidesPerView: 2,
    },
  },
});

new Swiper(".swiper-projects", {
  navigation: {
    nextEl: ".swiper-projects .gallery-button-next",
    prevEl: ".swiper-projects .gallery-button-prev",
  },
  loop: true,
  initialSlide: 1,
  allowTouchMove: true,
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    701: {
      allowTouchMove: false,
      slidesPerView: 3,
    },
  },
});

new Swiper(".ship-owners-slider", {
  lazy: true,
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".ship-owners-slider__right-arrow",
    prevEl: ".ship-owners-slider__left-arrow",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

new Swiper(".cruisesSPB", {
  lazy: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".cruisesSPB__right-arrow",
    prevEl: ".cruisesSPB__left-arrow",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
      loop: false,
    },
    992: {
      slidesPerView: 3,
    },
    560: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 1.4,
    },
    10: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
  },
});
