const inputFile = document.getElementById('inputFile');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector('.image-preview_image');
const previewDefaultText = previewContainer.querySelector('.image-preview_default-text');

const reader = new FileReader();
var imageObject = new String();
var fileName = new String();
inputFile.addEventListener("change",function(){
	const file = this.files[0];

	if(file){

		previewDefaultText.style.display= 'none';
		previewImage.style.display= 'block';

		reader.addEventListener("load",function(){
			console.log(this);
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
});

function performFunction() {
	eel.superFunction(imageObject,fileName)(setImage);
}

function loadimg() {
    var a = '<div class="image-preview" id="imagePreview">' + '<img src="" alt="Image Preview" id="image-preview_image" class="image-preview_image">'+
        '<span class="image-preview_default-text">Image Preview</span>' + '</div>' + '<button onclick = "performFunction()"> Press me! </button>';
    document.getElementById("loadimghere").innerHTML = a;
}

function setImage(base64) {
	previewImage.setAttribute('src',base64);
}