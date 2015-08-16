$("#toggle").click(function(){
  $("nav").toggleClass("is-open");
  $("nav").toggleCSS('display', 'none');
});

$(window).scroll (function () {
  var sT = $(this).scrollTop();
    if (sT >= 650) {
        $('nav').addClass('scroll');
    } else {
        $('nav').removeClass('scroll');
    }
});
