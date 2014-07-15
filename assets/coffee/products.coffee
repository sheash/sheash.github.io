$ = jQuery
$(document).ready ->
  $(window).scroll ->
    top = $(this).scrollTop()
    if top > 630 or top > $(window).height()
      $('#backtop').show()
    else
      $('#backtop').hide()
    return

  $('#backtop').click (e) -> 
    e.preventDefault()
    $("body, html").stop().animate 
      scrollTop : 0
      , 300
    return

  return
  

