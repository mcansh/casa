
// would have all vars here but that breaks the function????!
var $nav = $("nav");
// blur the nav
// manually becuase of a webkit bug when using classes
if ($(window).width() >= 700) {
  $(function() {
    $(window).scroll(function() {
        var $scroll = $(window).scrollTop();

        if ($scroll >= 100) {
          $nav.css({"background-color": "rgba(107, 194, 129, 0.5)", "-webkit-backdrop-filter": "blur(10px)"});
          $nav.css("height", "5em");
        } else {
          $nav.css({"background-color": "rgba(107, 194, 129, 0.0)", "-webkit-backdrop-filter": "blur(0px)"});
          $nav.css("height", "7em");
        }
    });
  });
}

// Mobile Nav
var $hamburger = $(".hamburger");
var $links = $(".links");
$hamburger.on("click", function() {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $nav.toggleClass("is-open");
  $links.toggleClass("is-open");
});
