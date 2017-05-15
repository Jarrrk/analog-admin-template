
/*
 *  File name: Scritps.js
 *  All main scripts are here
 */


;(function($) {
  'use strict';

  /*
   * Page loading effects
   */
  if ($('.an-loader-container').length > 0 ) {
    $(window).on('load', function() {
      $(".an-loader-container").fadeOut("slow");
    });
  }





})(jQuery);




/*
 * Initialize wow js for scrolling aniamtion
 */
new WOW().init();
