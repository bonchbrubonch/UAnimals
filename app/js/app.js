$(function () {

  $(".header__btn").on("click", function () {
    $(this).toggleClass("open");
    $(".header__nav").toggleClass("open");
    $("body").toggleClass("lock");
  });

  $(".city").select2({

  });
  $(".delivery").select2({
    minimumResultsForSearch: Infinity,
  });
  $(".department").select2({

  });

  var mixer = mixitup(".item-list");

});

if ($(window).width() <= 576) {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}