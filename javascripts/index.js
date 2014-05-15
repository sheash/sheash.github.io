var $;

$ = jQuery;

$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    speed: 500,
    autoplay: true
  });
  if (!Modernizr.backgroundsize) {
    return $('.navbar-brand').css({
      background: "url('/images/sheash-logo-s.png') no-repeat"
    });
  }
});
