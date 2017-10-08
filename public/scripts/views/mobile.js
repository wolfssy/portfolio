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
//
// $(document).ready(function() {
//
//   var active1 = false;
//   var active2 = false;
//   var active3 = false;
//   var active4 = false;
//
//     $('.parent2').on('mousedown touchstart', function() {
//
//     if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
//     else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'});
//      if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
//     else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
//       if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
//     else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
//       if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(125px,0px)'});
//     else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
//     active1 = !active1;
//     active2 = !active2;
//     active3 = !active3;
//     active4 = !active4;
//
//     });
// });
