$ = jQuery
toTop = $('.to-top')

urlMap =
  'jc-exclusive': 0
  'plastic-ball-pen': 1
  'semi-metal-pen': 2
  'eco-pen': 3
  'stylus-pen': 4
  'muti-color-pen': 5
  'erasable-pen': 6
  'cartoon-pen': 7
  'novelty-pen': 8
  'gel-pen': 9

$(document).ready ->

  cpath = urlMap[$.url('2')]
  $('.sidebar ul li').eq(cpath).css 'font-weight', 'Bold'

  $(".nav.nav-stacked").sticky({topSpacing:0})

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
      scrollTop : 0
      , 300
    return
  return

