var $;

$ = jQuery;

$(document).ready(function() {
  var stickyNav, stickyNavTop;
  stickyNavTop = $(".sidebar .nav").offset().top;
  stickyNav = function() {
    var scrollTop;
    scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $(".sidebar .nav").addClass("sticky");
    } else {
      $(".sidebar .nav").removeClass("sticky");
    }
  };
  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
});
