define([
    "jquery"
  ], 
  function($) {
    "use strict";
  
    var widthWindow = $(window).outerWidth();
    
    if(widthWindow < 768) {
      var menuLink = $('.menu-link');
      var menuBack = $('.menu-back');

      menuLink.click(function(){
        if($(this).next('.submenu').length) {
          $(this).next('.submenu').addClass('active');
        }
      });

      menuBack.click(function() {
        $(this).parent().parent().removeClass('active');
      })
    }
    
  });