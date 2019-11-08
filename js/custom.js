(function($){
	"use strict";
    
	/* ---- Preloader ---- */
	$(window).load(function() {
		$('.loader').fadeOut();
		$('.page-loader').delay(350).fadeOut('slow');
	});   
  
	/* --- WOW Animation --- */
	var wow = new WOW({
			mobile: false
		});
	wow.init(); 
 
})(jQuery);
