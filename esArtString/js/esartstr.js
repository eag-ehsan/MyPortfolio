
var imageWidth = 500;
var imageHeight = 500;
var imgid1 = document.getElementById("imgid1");
var inFile = document.getElementById("fileInput");
var canvas1 = document.getElementById("canvas1id");
var ctx = canvas1.getContext('2d');
inFile.addEventListener("change", (e) => {
    imgid1.src = URL.createObjectURL(e.target.files[0]);
  }, false);

//imgonload();
function imgonload(){
    img1 = new Image();
    img1.src = imgid1.src;
    ctx.canvas.width = imageWidth;
    ctx.canvas.height = imageHeight;

    ctx.clearRect(0,0, imageWidth, imageHeight);
    ctx.drawImage(img1, 0, 0, imageWidth, imageHeight, 0, 0, imageWidth, imageHeight);
    es_len = imageHeight;


    ctx.globalCompositeOperation='destination-in';
    ctx.beginPath();
    ctx.arc(imageWidth/2,imageHeight/2, imageHeight/2, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();


}