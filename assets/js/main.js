$(document).ready(function(){
	
    if ( $.cookie('body-theme') == null ) {
       $.cookie('body-theme', 'nigth', { expires: 7, path: '/' });
       // $.cookie('body-theme'); // => "value" 
       // $.removeCookie('name');
    }

    else if ( $.cookie('body-theme') == 'nigth' ) {
		$(".goNigth").toggle()
    }
    else if ( $.cookie('body-theme') == 'day' ) {
		$(".goDay").toggle()
    	$(".skin").toggleClass('day');
    }
    else {
       alert("ok");
    }

	$(".goDay").click(function(){
		$(".goNigth").toggle()
		$(".goDay").toggle()
        $(".skin").toggleClass('day');
        $.cookie('body-theme', 'day', { expires: 7, path: '/' });
	});

    $(".goNigth").click(function(){
		$(".goNigth").toggle()
		$(".goDay").toggle()
        $(".skin").toggleClass('day');
        $.cookie('body-theme', 'nigth', { expires: 7, path: '/' });
	});


	$(".go").fadeOut(1500)
	$(".go").fadeIn(400)
	$(".go").fadeOut(1000)
	$(".go").fadeIn(400)



});