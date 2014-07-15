$ = jQuery
toTop = $('.to-top')

$(document).ready ->
  $(window).scroll ->
    top = $(this).scrollTop()
    
    if top > 630 or top > $(window).height()
      toTop.show()
    else
      toTop.hide()
    return

  toTop.click (e) -> 
    e.preventDefault()
    $("body, html").stop().animate 
      scrollTop : 0, 300
    return

  return
  

