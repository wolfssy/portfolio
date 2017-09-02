'use strict';

$(function(){
  var width = 775;
  var animationSpeed = 975;
  var pause = 2600;
  var currentSlide = 0;

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
