'use strict';
var images = ['img/bat.jpg', 'img/bee.jpg', 'img/beepollen.jpg', 'img/hippo.jpg', 'img/native.jpg'];
var features = {};
var index = 0;


//img populate
features.imagePopulate = function(){
  $('#slider').attr('src', images[index]);
};

//img carousel
features.imageSlider = function(){
  $('#left').click(function(e){
    e.preventDefault;
    index++;

    $('.slider').hide();
    if(index===images.length){
      index = 0;
    }
    $('.slider').attr('src', images[index]);
    $('.slider').fadeIn('easing');
  });
  $('#right').click(function(e){
    e.preventDefault();
    if(index === 0){
      index = images.length;
    };
    $('.slider').hide();
    index--;
    $('.slider').attr('src', imgs[index]);
    $('.slider').fadeIn('easing');
  });
};
$(document).ready(function(){
    features.imagePopulate();
    features.imageSlider();
});
