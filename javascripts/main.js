var count, imageSrc, imgArr, p, slidingImages;

imgArr = ["/images/poster/poster1.jpg", "/images/poster/poster3.jpg", "/images/poster/poster2.jpg"];

count = imgArr.length;

p = 0;

slidingImages = function() {
  if (p < count) {
    imageSrc(p);
    p += 1;
  } else {
    p = 0;
    imageSrc(p);
  }
  setTimeout(slidingImages, 5000);
};

imageSrc = function(p) {
  document.slider.src = imgArr[p];
};

$(window).scroll(function() {
  var topvalue;
  topvalue = void 0;
  topvalue = $(window).scrollTop();
  if (topvalue >= 630) {
    $("header").css({
      position: "fixed",
      top: "0",
      opacity: "0.9",
      background: "#ff6633"
    });
  } else {
    $("header").css({
      position: "absolute",
      top: $(window).height + "px",
      opacity: "1",
      background: "none"
    });
  }
});

$(document).ready(function() {
  return $("#nav-ul").click(function(e) {
    var link;
    link = void 0;
    link = $(e.target);
    if (link.is("a")) {
      $("body,html").stop().animate({
        scrollTop: $(link.attr("href")).offset().top - 90
      }, 500);
    }
    return false;
  });
});
