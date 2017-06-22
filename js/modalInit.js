var modal = document.getElementById('myModal');
var images = $("img");
//var img = document.getElementsById('myImg');
var modalImg = document.getElementById("img01");
images.on('click',  function(){
	modal.style.display = "block";
	modalImg.src = this.src;
});

modal.onclick = function() { 
	modal.style.display = "none";
}