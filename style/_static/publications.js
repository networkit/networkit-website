$(document).ready(function () {
        $(".btn-link").click(function () {
        	var btn = $(this);
        	$(".collapse").each(function( index ) {
        		if (btn.parent().text() === $(this).parent().text()) {
        			if(btn.hasClass("collapsed")) {
	        			btn.removeClass("collapsed");
    	    			$(this).collapse('show');        				
        			} else {
        				btn.addClass("collapsed");
        				$(this).collapse('hide');
        			}

        		}
        	});
            
        });
    });