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