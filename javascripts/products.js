var $, toTop;

$ = jQuery;

toTop = $('.to-top');

$(document).ready(function() {
  $(window).scroll(function() {
    var top;
    top = $(this).scrollTop();
    if (top > 630 || top > $(window).height()) {
      toTop.show();
    } else {
      toTop.hide();
    }
  });
  toTop.click(function(e) {
    e.preventDefault();
    $("body, html").stop().animate({
      scrollTop: 0
    }, 300);
  });
});
