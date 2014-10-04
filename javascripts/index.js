var $;

$ = jQuery;

$(document).ready(function() {
  return $(".rslides").responsiveSlides({
    speed: 1000,
    pager: true,
    nav: true,
    pauseControls: false,
    namespace: "transparent-btns"
  });
});
