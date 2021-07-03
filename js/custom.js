(function($) {
	'use strict';
   
   // Code is here.....

// This code for Menu
$(".menu-icon").on("click", function(){
	
	 $(".menu").slideToggle();
});
 
 // This code for auto-scroll top

$(window).scroll(function () {
	var goTop = $(window).scrollTop();

 if (goTop < 650) {
 	$(".scrl-bar").css({'opacity' : '0'});
 }
 else {
 	$(".scrl-bar").css({'opacity' : '1'});
 }

});

$(".scrl-bar").on("click",function () {
	
	$("html").animate({'scrollTop' : '0'},3000);
});



})(jQuery);







 