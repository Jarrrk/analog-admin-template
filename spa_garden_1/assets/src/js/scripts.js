/*
 *  File name: Scritps.js
 *  All main scripts are here
 */

;(function($) {
  'use strict';


  /*
   * initialize page loader effect
   */
  if ($('.an-loader').length > 0 ) {
    $(window).on('load', function() {
      $(".an-loader").fadeOut("slow");
    });
  }

  /*
   *
   * Default slider for every slider inside this template
   * If you want to change some slider style like increase item
   * better clone this code in the bottom then try.
   *
   */

  if ($('.default-slider').length > 0) {
    $('.default-slider').owlCarousel({
      items: 1,
      singleItem: true,
      autoPlay: true,
      navigation: true,
      navigationText: ['&#xf2ca', '&#xf30f'],
      pagination: true,
    });
  }

  /*
   * parallax bg initialization
   */

  if ($('.parallax-bg').length > 0) {
    $('.parallax-bg').parallax({
      bleed: 50
    });
  }


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 100) {
      $(".navbar-default").addClass("navbar-fixed-top");
    } else {
      $(".navbar-default").removeClass("navbar-fixed-top");
    }
  });

  /*
   * Scrollspy anition
   */

  $(".navbar-nav li a[href^='#']").on('click', function(e) {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

    // edit: Opera and IE requires the "html" elm. animated
  });




  /*
   * Isotope call script
   */

  $(window).on('load', function(){
    if ($('.an-portfolio-section').length > 0) {
      var $grid = $('.an-portfolio-section .row').isotope({
        // options
        itemSelector: '.an-item-width',
        percentPosition: true,
        masonry: {
          columnWidth: '.an-item-width'
        }
      });

      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
    }
  });


  $(window).on('load', function(){
    if ($('.blog-masonry').length > 0) {
      var $grid = $('.blog-masonry .row').isotope({
        itemSelector: '.col-md-4',
        percentPosition: true,
        masonry: {
          columnWidth: '.col-md-4'
        }
      });
    }
  });


  /*
   * video bg plugin calls
   * */

  if ($('.video-bg').length > 0) {
    $('.video-bg').vide({
      mp4: '../assets/video/ocean.mp4',
      webm: '',
      ogv: '',
      poster: '../assets/video/ocean.jpg',
    }, { posterType: 'jpg' });
  }

  /*
   * match height plugin for
   * contact use left and right full hieght map
   * */
  if($('.an-same-height').length > 0 ) {
    $(function() {
      $('.an-same-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });
  }

})(jQuery);


/*
 * Initialize wow js for scrolling aniamtion
*/
new WOW().init();

