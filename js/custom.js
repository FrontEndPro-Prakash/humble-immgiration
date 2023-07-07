$(document).ready(function() {
  $('#playvideo-modal').on('shown.bs.modal', function () {
      $('#video-preivew-model')[0].play();
    })
    $('#playvideo-modal').on('hidden.bs.modal', function () {
      $('#video-preivew-model')[0].pause();
    })
	//sticky navbar
    'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('.sticky_bar');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
});