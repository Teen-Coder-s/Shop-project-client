const swiper = new Swiper('.swiper-header', {
    loop: true,
    lazy: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    effect: "fade",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

const offroozSwiper = new Swiper('.swiper-offrooz', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const selectedSliderSwiper = new Swiper('.swiper-selected', {
  effect: "fade",
  loop: true,
  lazy: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
});

const bestProductSelling = new Swiper('.swiper-best-selling', {
  lazy: true,
  spaceBetween: 30,
  slidesPerView: 7.5,
});

const offtermotan = new Swiper('.swiper-offer-motan', {
  lazy: true,
  spaceBetween: 30,
  slidesPerView: 7.5,
});

const winterSkinCare = new Swiper('.swiper-winter-skin-care', {
  lazy: true,
  slidesPerView: 7.5,
  spaceBetween: 30,
});

const popularPerfumes = new Swiper('.swiper-popular-perfumes', {
  lazy: true,
  slidesPerView: 7.5,
  spaceBetween: 30,
});

const suitableForHair = new Swiper('.swiper-suitable-for-hair', {
  lazy: true,
  slidesPerView: 7.5,
  spaceBetween: 30,
});