$ = jQuery
toTop = $('.to-top')

$(document).ready ->
  stickyNavTop = $(".sidebar .nav").offset().top
  stickyNav = ->
    scrollTop = $(window).scrollTop()
    if scrollTop > 500
      toTop.fadeIn()
    else 
      toTop.fadeOut()
    return

  stickyNav()
  $(window).scroll ->
    stickyNav()
    return

  toTop.click (e) -> 
    e.preventDefault()
    $("body, html").animate 
      scrollTop : 0
    return

  return
  

