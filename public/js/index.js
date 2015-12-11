$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('.menu').fadeIn(500);
          $('.menu2').fadeOut(500);
          $('.intro-image').addClass('picture_margin')
      } else {
          $('.menu').fadeOut(500);
          $('.menu2').fadeIn(500);
          $('.intro-image').removeClass('picture_margin')
      }
  });
});
