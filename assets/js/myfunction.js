$(function() {
  var nav = $("nav");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 200) {
          nav.addClass('scroll');
      } else {
          nav.removeClass("scroll");
      }
  });
});


var $hamburger = $(".hamburger");
var $links = $(".links");
$hamburger.on("click", function() {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $links.toggleClass("is-open");
  $links.toggleClass("blur");
});
