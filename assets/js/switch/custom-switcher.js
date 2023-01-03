$(document).ready(function($){
	// Style Selector	
		$('#style-selector').animate({
			left: '-213px'
		});

		$('#style-selector a.close').click(function(e){
		
			e.preventDefault();
			var div = $('#style-selector');
			if (div.css('left') === '-213px') {
			
				jQuery('#style-selector').animate({
					left: '0'
				});
				jQuery(this).removeClass('icon-angle-left');
				jQuery(this).addClass('icon-angle-right');
			} else {
				jQuery('#style-selector').animate({
					left: '-213px'
				});
				jQuery(this).removeClass('icon-angle-right');
				jQuery(this).addClass('icon-angle-left');
			}
		})
		
		});