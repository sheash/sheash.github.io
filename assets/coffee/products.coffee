$ = jQuery

$(document).ready ->
  stickyNavTop = $(".sidebar .nav").offset().top
  stickyNav = ->
    scrollTop = $(window).scrollTop()
    if scrollTop > stickyNavTop
      $(".sidebar .nav").addClass "sticky"
    else
      $(".sidebar .nav").removeClass "sticky"
    return

  stickyNav()
  $(window).scroll ->
    stickyNav()
    return

  return

