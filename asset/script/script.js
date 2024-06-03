var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

document.querySelector('#prevButton').addEventListener('click', function() {
  swiper.slidePrev();
});

document.querySelector('#nextButton').addEventListener('click', function() {
  swiper.slideNext();
});

document.querySelector(".next").addEventListener("click", function() {
  swiper.slideNext();
});

document.querySelector(".prev").addEventListener("click", function() {
  swiper.slidePrev();
});