var $, toTop;

$ = jQuery;

toTop = $('.to-top');

$(document).ready(function() {
  var stickyNav, stickyNavTop;
  if ($('.items').length !== 0) {
    $('.items').tooltip();
  }
  stickyNavTop = $(".sidebar .nav").offset().top;
  stickyNav = function() {
    var scrollTop;
    scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $(".sidebar .nav").addClass("sticky");
    } else {
      $(".sidebar .nav").removeClass("sticky");
    }
    if (scrollTop > 500) {
      toTop.fadeIn();
    } else {
      toTop.fadeOut();
    }
  };
  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
  toTop.click(function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: 0
    });
  });
});
