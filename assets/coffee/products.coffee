$ = jQuery

String::format = ->
  s = this
  i = arguments.length
  s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i])  while i--
  s

productsMap =
  item1: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  item2: ['6.jpg', '7.jpg', '8.jpg']

tag = '<div class="items"><img class="img-rounded img-responsive" src="/images/danzhi/{0}" alt="Responsive image"></div>'

$('.sidebar li').each (i, el) ->
  cl = $(el).attr 'class'
  console.log cl
  $(el).on 'click', ->
    $('.contents').empty()
    while i < productsMap[cl].length
      $('.contents').append tag.format(productsMap[cl][i])
      i++

