jQuery(document).ready(function ($) {

    "use strict";
	
// TEXT ROTATOR
	if ($.isFunction($.fn.animatedHeadline)) {
		$("#selector").animatedHeadline({
             animationType: "clip"
        });	
	}
	
//------- offcanvas menu 

	const menu = document.querySelector('#toggle');  
	const menuItems = document.querySelector('#overlay');  
	const menuContainer = document.querySelector('.menu-container');  
	const menuIcon = document.querySelector('.canvas-menu i');  

	function toggleMenu(e) {
		menuItems.classList.toggle('open');
		menuContainer.classList.toggle('full-menu');
		menuIcon.classList.toggle('fa-bars');
		menuIcon.classList.add('fa-times');
		e.preventDefault();
	}

	if( menu ) {
		menu.addEventListener('click', toggleMenu, false);	
	}
	
// offcanvas menu dropdowns
	$('.offcanvas-menu li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});	


//===== owl carousel  =====//
    if ($.isFunction($.fn.owlCarousel)) {
		
//--- home6 caro
	$('.big-caro').owlCarousel({
		items: 4,
		loop: true,
		margin: 2,
		autoplay: false,
		autoplayTimeout: 1500,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		animateIn: 'flipInX',
		animateOut: 'fadeOut', 
		responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,

				},
				1000:{
					items:4,
				}
			}

	});
		
	$('.blog-caro').owlCarousel({
	items: 3,
	loop: true,
	margin: 30,
	autoplay: false,
	autoplayTimeout: 1500,
	smartSpeed: 1000,
	autoplayHoverPause: true,
	nav: true,
	dots: false,
	responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,

			},
			1000:{
				items:3,
			}
		}

	});

    }



//----- count down timer		
    if ($.isFunction($.fn.downCount)) {
        $('.countdown').downCount({
            date: '9/1/2020 00:00:00',
            offset: +10
        });
    }
	
	
// slick carousel for detail page

	$('.slide-for-testi').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		slide: 'li',
		fade: false,
		asNavFor: '.slide-for-thumb'
	});
	
	$('.slide-for-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slide-for-testi',
		dots: false,
		arrows: false,
		slide: 'li',
		vertical: true,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
				centerMode: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: true,
				centerMode: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
				centerMode: true,
				dots: false,
				arrows: false
			}
		}
		]
	});
	
//-------counter for funfacts
	if ($.isFunction($.fn.counterUp)) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	}
	
/*accordion*/    
$(".tabs-container .tab-content").hide();
$(".tabs-container .tab-content.active").show();
$(".verticle-tab a").on("click", function() {
    var hash = $(this).attr('href');
    $(".tabs-container").find(hash).slideDown('slow');
    $(".tabs-container").find(hash).siblings().slideUp('slow');
    return false;
});	


});//document ready end


// Animate loader off screen
$(window).on('load', function () {
	"use strict";

	// pre page loader		
	$(".se-pre-con").fadeOut("slow");

});//window.load end here







