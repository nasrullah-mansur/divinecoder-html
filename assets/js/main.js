(function ($) {
  "use strict";

  // meanmenu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });

  //mobile side menu
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });

  // popup slider
  $(".owl-carousel.s-popup-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
  });

  //popup
  function modalPopup(popupBtn, popupBox, popupCrossBtn){
    $(popupBtn).on("click", function (e) {
      e.preventDefault()
      $(popupBox).addClass("active");
      $('.popup-overlay').addClass('active-overlay')
    });

    $(`${popupCrossBtn}, .popup-overlay`).on("click", function () {
      $(popupBox).removeClass("active");
      $('.popup-overlay').removeClass('active-overlay')
    });
  }
  modalPopup('.service-area .service-item', ".service-popup",'.service-popup .popup-cross-icon')

  modalPopup('.portfolio-area .portfolio-item', ".portfolio-popup",'.portfolio-popup .popup-cross-icon')
})(jQuery);
