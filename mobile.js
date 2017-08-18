'use strict';

//followed along with "jQuery Tutorial #6 - Building a jQuery Image Slider" to learn and get it done.

$(function() {
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.allSlides');
  var $slide = $slideContainer.find('.slide');

  setInterval(function() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
      currentSlide++;
      if (currentSlide === $slide.length){
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
    }, pause);
}
function stopSlider(){
  clearInterval(interval);
}
$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
