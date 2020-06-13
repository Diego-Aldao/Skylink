var swiper = new Swiper(".swiper-container", {
  effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
