$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartspeed: 1000,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    stagePadding: 25,
    items: 2,
    loop: true,
    margin: 10,
    autoplay: false,
    dots: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [2000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
