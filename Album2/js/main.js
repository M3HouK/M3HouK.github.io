$('.slider__inner').slick({
	autoplay: true,
	arrows: false,
	pauseOnHover: false,
	pauseOnFocus: false
});

$("[data-fancybox]").fancybox({
	slideShow : {
		autoStart : true,
		speed     : 4000
	}
});

var oldAl = document.getElementById('old');
var newAl = document.getElementById('new');

function songOne() {
	oldAl.play();
	newAl.pause();
}

function songTwo() {
	newAl.play();
	oldAl.pause();
}