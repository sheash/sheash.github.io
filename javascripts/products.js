var $;

$ = jQuery;

$(document).ready(function() {
  $(window).scroll(function() {
    var top;
    top = $(this).scrollTop();
    if (top > 630 || top > $(window).height()) {
      $('#backtop').show();
    } else {
      $('#backtop').hide();
    }
  });
  $('#backtop').click(function(e) {
    e.preventDefault();
    $("body, html").stop().animate({
      scrollTop: 0
    }, 300);
  });
});
