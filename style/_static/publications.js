$(document).ready(function () {
        $(".btn-link").click(function () {
        	var btn = $jqTheme(this);
        	$(".collapse").each(function( index ) {
        		if (btn.parent().text() === $jqTheme(this).parent().text()) {
        			if(btn.hasClass("collapsed")) {
	        			btn.removeClass("collapsed");
    	    			$jqTheme(this).collapse('show');        				
        			} else {
        				btn.addClass("collapsed");
        				$jqTheme(this).collapse('hide');
        			}

        		}
        	});
            
        });
    });