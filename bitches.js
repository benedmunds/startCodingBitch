$(document).ready(function(){

	var random = Math.floor(Math.random()*6);

	switch (random) {
		case 2:
			$('body').css('background-image', "url('img/background2.jpg')");
			$('#text').css('left', '10px');
			$('#text').css('top', '0px');
			$('#text').css('font-size', '4.2em');
			break;
		case 3:
			$('body').css('background-image', "url('img/background3.jpg')");
			$('#text').css('left', 'auto');
			$('#text').css('right', '20px');
			$('#text').css('top', '0px');
			$('#text').css('width', '5em');
			$('#text').css('text-align', 'right');
			break;
		case 4:
			$('body').css('background-image', "url('img/background4.jpg')");
			$('#text').css('left', '470px');
			$('#text').css('top', '0px');
			$('#text').css('font-size', '4em');
			$('#text').css('text-align', 'left');
			break;
		case 5:
			$('body').css('background-image', "url('img/background5.jpg')");
			$('#text').css('left', 'auto');
			$('#text').css('right', '420px');
			$('#text').css('top', '15px');
			$('#text').css('font-size', '4.4em');
			$('#text').css('text-align', 'right');
			break;
		case 6:
			$('body').css('background-image', "url('img/background6.jpg')");
			$('#text').css('left', '210px');
			$('#text').css('top', '0px');
			$('#text').css('font-size', '4.5em');
			$('#text').css('text-align', 'left');
			break;
	}
	

});

$(window).load(function(){

	$('#text').html('START CODING<br clear="both" />BITCH');
	$('#text').css('color', '#FFF');

});