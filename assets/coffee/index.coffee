$ = jQuery

$(document).ready ->
  $('.slider').slick
    dots: false
    speed: 500
    autoplay: true
  # if !Modernizr.backgroundsize
  #   $('.navbar-brand').css 
  #     background: "url('/images/sheash-logo-s.png') no-repeat"
