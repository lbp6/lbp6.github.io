var modal = document.getElementById('myModal');
var vModal = document.getElementById('videoModal');
var images = $("img");
var videos = $(".vid");
var myVid = document.getElementById('vid1');
var playedThrough = false;
var loaded = false;
//var img = document.getElementsById('myImg');
var modalImg = document.getElementById("img01");

var audioP = new Audio('mp3/00016cd9fd25f8554.mp3');

images.on('click',  function(){
	modal.style.display = "block";
	modalImg.src = this.src;
});

modal.onclick = function() { 
	modal.style.display = "none";
}

$(myVid).on('ended', function(){this.playedThrough = true;});

myVid.onloadeddata = function() { 
	loaded = true;
}

videos.on('click',  function(){
	if (loaded) {
		Amplitude.pause();
		vModal.style.display = "block";
		if(!myVid.playedThrough)
			myVid.play();
		if (loaded)
			audioP.play();
	}
	else {
		window.alert("Все еще загружается. Купи нормальный интернет.");
	}
});

$(".close").on('click',  function(){
	audioP.pause();
	vModal.style.display='none';
	myVid.pause();
	Amplitude.play();
});

function changevolume(amount) {
    audioP.volume = amount / 100;
}
