'use strict';

$(function(){
  var width = 1220;
  var animationSpeed = 955;
  var pause = 1550;
  var currentSlide = 2;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider(){
    interval = setInterval(function(){
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
        currentSlide++;
        if(currentSlide === $slides.length){
          currentSlide = 1;
          $slideContainer.css('margin-left',0);
        }
      });
    }, pause);
  }
  function stopSlider(){
    clearInterval(interval);
  }
  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  startSlider();
});
