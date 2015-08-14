$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#why');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('nav').css('background-color', '#6BC281');
       } else {
          $('nav').css('background-color', 'transparent');
       }
   });
});
