var $, productsMap, tag;

$ = jQuery;

String.prototype.format = function() {
  var i, s;
  s = this;
  i = arguments.length;
  while (i--) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
  }
  return s;
};

productsMap = {
  item1: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  item2: ['6.jpg', '7.jpg', '8.jpg']
};

tag = '<div class="items"><img class="img-rounded img-responsive" src="/images/danzhi/{0}" alt="Responsive image"></div>';

$('.sidebar li').each(function(i, el) {
  var cl;
  cl = $(el).attr('class');
  console.log(cl);
  return $(el).on('click', function() {
    var _results;
    $('.contents').empty();
    _results = [];
    while (i < productsMap[cl].length) {
      $('.contents').append(tag.format(productsMap[cl][i]));
      _results.push(i++);
    }
    return _results;
  });
});
