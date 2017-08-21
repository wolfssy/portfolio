'use strict';

var carouselView = {};

carouselView.populateFilters = function() {
  $('slider').each(function() {
    if (!$(this).hasClass('allSlides')) {
      var val = $(this).find('address a').text();
      var optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

// articleView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-category="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#author-filter').val('');
//   });
// };

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

// articleView.setTeasers = function() {
//   $('.article-body *:nth-of-type(n+2)').hide();
//   $('article').on('click', 'a.read-on', function(e) {
//     e.preventDefault();
//     if ($(this).text() === 'Read on →') {
//       $(this).parent().find('*').fadeIn();
//       $(this).html('Show Less &larr;');
//     } else {
//       $('body').animate({
//         scrollTop: ($(this).parent().offset().top)
//       },200);
//       $(this).html('Read on &rarr;');
//       $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
//     }
//   });
// };

$(document).ready(function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
})
