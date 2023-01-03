/*********************/
/*
/*	IE 10 Browser fixing	
/*
/*********************/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


/*********************/
  $(document).ready(function($){ 
	"use strict";

/* ==============================================
Smooth Scroll
=============================================== */
	try {	
		$('.nav li a, .move a').smoothScroll();	
	} catch(err) {

		}	
/* ==============================================
Navigation
=============================================== */
  
		  $("#navigation").sticky({ topSpacing: 0, className: 'sticky' });	
		  
		  $('#navigation').onePageNav({
				scrollSpeed: 100,
				scrollOffset: 0
			})

/* ==============================================
Isotope
=============================================== */

	// cache container
	var container = $('#portfolio-wrap');	
	

	container.isotope({
		animationEngine : 'best-available',
	  	animationOptions: {
	     	duration: 200,
	     	queue: false
	   	},
		layoutMode: 'fitRows'
	});	
setProjects();	

	// filter items when filter link is clicked
	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
	  	container.isotope({ filter: selector });
        setProjects();		
	  	return false;
	});
		
		
		function splitColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1200) {
				columnNumb = 5;
			} else if (winWidth > 900) {
				columnNumb = 4;
			} else if (winWidth > 600) {
				columnNumb = 3;
			} else if (winWidth > 390) {
				columnNumb = 2;
			} else if (winWidth > 300) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}		
		
		function setColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = splitColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			container.find('.portfolio-item').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function setProjects() { 
			setColumns();
			container.isotope('reLayout');
		}		
		
		container.imagesLoaded(function () { 
			setColumns();
		});
		
	
		$(window).bind('resize', function () { 
	
			setProjects();			
		});

		
/* ==============================================
Magnific Popup
=============================================== */			
					
	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image'
		});
	} catch(err) {

	}

/* ==============================================
Popup Gallery
=============================================== */	
	try {	
		$('.popup-gallery').magnificPopup({
			  delegate: 'a',
			  type: 'image',
			  tLoading: 'Loading image #%curr%...',
			  mainClass: 'mfp-img-mobile',
			  gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			  },
			  image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
				  return item.el.attr('title') + '<small></small>';
				}
			  }
			});
	} catch(err) {

	}

/* ==============================================
Counter Up
=============================================== */	
	try {
		$('.counter').counterUp({
            delay: 10,
            time: 800
        });
	} catch(err) {

	}



/* ==============================================
Blog Slider
=============================================== */	
	try {	
		$("#owl-demo,#owl-demo3,#owl-demo2,#owl-demo-1,#owl-demo-2").owlCarousel({
	 
		  navigation : true, // Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true
	 
		  // "singleItem:true" is a shortcut for:
		  // items : 1, 
		  // itemsDesktop : false,
		  // itemsDesktopSmall : false,
		  // itemsTablet: false,
		  // itemsMobile : false
	 
		});
	} catch(err) {

		}


		

/* ==============================================
ACCORDION TAB
=============================================== */		
		
	try {
		$('.accordion').collapse()
	
	} catch(err) {

		}

/* ==============================================
CAROUSEL SLIDE
=============================================== */		
	try {
		$('.carousel-portfolio').carousel({
		interval: false
		}) 
	} catch(err) {

		}

/* ==============================================
EASY PIE CHART
=============================================== */		

	try {
		$(function() {
			$('.chart').easyPieChart({
				scaleColor:false,
				animate:4000,
				barColor: '#e7ad00',
				onStep: function(from, to, percent) {
				this.el.children[0].innerHTML = Math.round(percent);
			}
			});
		});
	} catch(err) {

		}

/* ==============================================
Parallax
=============================================== */
	
	try {
		$(window).stellar({ 
		horizontalScrolling: false,

		});
	} catch(err) {

		}	

/* ==============================================
Animated Custom
=============================================== */
	try {		
		if ($(".animated")[0]) {
            $('.animated').css('opacity', '0');
			}
			$('.triggerAnimation').waypoint(function() {
            var animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + animation);

			},
                {
                    offset: '80%',
                    triggerOnce: true
                }
			);
	} catch(err) {

		}
		
		
/* ==============================================
text-rotator
=============================================== */		
		
		$(".rotate").textrotator({
        animation: "spin",
        speed: 2000
      });
	
		
		  
		
		$( ".map-marker" ).click(function() {
			
			$( "#map" ).toggle( "slow", function() {
				// Animation complete.
			});
		  
		});
		
		
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
		
});



/* ==============================================
Liquid Slider - Home Text Slider
=============================================== */
$('#slider-home').liquidSlider({
	  autoSlide:          true,
	  autoSlideInterval:  4500,
	  autoSlideControls:  true,
	  forceAutoSlide: true,
	  dynamicArrows: false,
    
  slideEaseFunction:'animate.css',
  slideEaseDuration:900,
  heightEaseDuration:900,
  animateIn:"bounceIn",
  animateOut:"bounceOut",
  callback: function() {
    var self = this;
    $('.slider-6-panel').each(function() {
      $(this).removeClass('animated ' + self.options.animateIn);
    });
  }
});

/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

	function close_toggle() {
	if ($(window).width() <= 768) {
	  $('.navbar-collapse a').on('click', function(){
		  $('.navbar-collapse').collapse('hide');
	  });
	}
	else {
	 $('.navbar .navbar-default a').off('click');
	}
	}
	close_toggle();

	$(window).resize(close_toggle);

/* ==============================================
Skill Bars
=============================================== */

$('.progress-col').waypoint(function() {
   jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});
	
	}, { offset: '100%' 
});


/* ==============================================
WOW plugin triggers animation.css on scroll
=============================================== */

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       150,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();	

/* ==============================================
fitText
=============================================== */

$("#slider-home h1").fitText(2.3);
$(".page-header h1").fitText(2.1, { minFontSize: '20px', maxFontSize: '36px' });

/* ==============================================
Backstretch
=============================================== */
    
$(".home-fullscreen-slider").backstretch([
	"assets/images/slide/slide_3.jpg",
	"assets/images/slide/slide_1.jpg",
	"assets/images/slide/slide_2.jpg"
], {
	fade: 750,
	duration: 4000
});


/* ==============================================
Preloader
=============================================== */

$(window).load(function(){
    $("#preloader").delay(500).fadeOut(1000);
        $(".preload-logo").addClass('fadeOutLeft');
		$(".back-logo").addClass('fadeOutRight');
		$(".preload-gif").addClass('fadeOutUp');
    
});
 /* ==============================================
Google Map Styles
=============================================== */		
  $(document).ready(function($){ 

			var contact = {"lat":"51.51152", "lon":"-0.104198"}; //Change a map coordinate here!

	
		var mapContainer = $('#map');
		mapContainer.gmap3({
			infowindow:{
				address:"http://goo.gl/maps/Mt7xc",
				options:{
					content: "London, Farringdon st!"
				},
				events:{
					closeclick: function(infowindow){
						alert("closing : " + infowindow.getContent());
					}
				}
			},
			action: 'addMarker',
			marker:{
				options:{
					icon : new google.maps.MarkerImage('assets/images/marker.png')
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 14
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	
		
		});
	