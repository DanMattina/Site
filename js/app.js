$(document).foundation();

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function($){
  $('.flexslider').flexslider({
      animation: "slide",
      animationSpeed: 1000,
      directionNav: true,

      start: function(slider){
        $('body').removeClass('loading');

      }
   });
   $('h2:first').css('margin', '0px')
   });
