var swiper = new Swiper(".swiper-container", {
  effect: "fade",
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
