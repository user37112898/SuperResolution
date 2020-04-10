const inputFile = document.getElementById('inputFile');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector('.image-preview_image');
const imageSection = document.getElementById('imageSection');
const loaderImg = document.getElementById('loading-image');
const loaderDiv = document.getElementById('loading');
const imageDescription = document.getElementById('imageDescription');
const reader = new FileReader();
var imageObject = new String();
var fileName = new String();
var img = new Image;

function openFileFunction(){
	inputFile.click();
	console.log($("#imageSection").offset().top);
}

inputFile.addEventListener("change",function(){
	const file = this.files[0];
	imageDescription.innerHTML = "Low Resolution Image"
	
	if(file){
		previewImage.style.display= 'block';
		img.onload = function() {
			loaderImg.height = previewImage.clientHeight;
			console.log(this.naturalHeight)
			console.log(previewImage.naturalHeight)
		}
		img.src = URL.createObjectURL(file);
		
		reader.addEventListener("load",function(){
			imageSection.style.display = 'block'
			$('html, body').animate({
				scrollTop: $('#imageSection').offset().top - 80 
			}, 1000);
			var str = reader.result;
			var strA = str.split(',')
			imageObject = strA[strA.length-1]
			fileName = file.name
			previewImage.setAttribute('src',this.result);
		});
		reader.readAsDataURL(file);
	}else{
		previewDefaultText.style.display= 'null';
		previewImage.style.display= 'null';
		previewImage.setAttribute('src',"");
	}
	inputFile.value = null;
});

function performFunction() {
	loaderDiv.style.display = 'block'
	eel.superFunction(imageObject,fileName)(setImage);
}

function setImage(base64) {
	previewImage.setAttribute('src',base64);
	loaderDiv.style.display = 'none'
	imageDescription.innerHTML ="High Resolution Image"
}