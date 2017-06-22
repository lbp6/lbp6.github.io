var initCarou = function() {
	$('#sliderTop').carouFredSel({
	align: 'center',
	width: '100%',
	//items:'variable',
	scroll: {
		items: 1,
		duration: 1000,
		timeoutDuration: 3000,
	},
	direction: 'left',
	});
	
	$('#sliderBottom').carouFredSel({
	align: 'center',
	width: '100%',
	//items:3,
	scroll: {
		items: 1,
		duration: 1000,
		timeoutDuration: 3000,
	},
	direction: 'right',
	});
}


      
window.onresize = function(event) {
	$(initCarou);
}