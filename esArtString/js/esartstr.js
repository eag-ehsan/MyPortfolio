
var imageWidth = 50;
var i=0,j=0;
var imageHeight = 50;
var imgid1 = document.getElementById("imgid1");
var inFile = document.getElementById("fileInput");
var canvas1 = document.getElementById("canvas1id");
var imgmatrixid = document.getElementById("imgmatrixid");
var ctx = canvas1.getContext('2d');

var rowDives = null;
var divpixelblocks = null;
var imgPixelMatrixMain = []
for(i=0;i<imageWidth;i++){
    imgPixelMatrixMain[i] = [];
}

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
function RGB2Hex(rgbIntArray) {
    return byte2hex(rgbIntArray[0]) + byte2hex(rgbIntArray[1]) + byte2hex(rgbIntArray[2]);
}
function byte2hex(bytenumber) {
    var hexdigits = "0123456789abcdef";
    var integgger = parseInt(bytenumber);
    if (integgger <= 0 || isNaN(bytenumber) || integgger > 255)
        return "00";
    integgger = Math.round(integgger);
    var hexStringOut = hexdigits.charAt((integgger - integgger % 16) / 16) + hexdigits.charAt(integgger % 16);
    return hexStringOut;
}

function escreatmatrix(){
    var pixel = null;
    var data = [];
  
    for(j=0;j<imageHeight;j++){
        rowDives = document.createElement('div');
        rowDives.classList.add("rowdives");
        rowDives.setAttribute('id', 'rowid' + j);
        imgmatrixid.appendChild(rowDives);
        var rowforadd = document.getElementById('rowid' + j);
        for(i=0;i<imageWidth;i++){


            imgPixelMatrixMain[i][j] = ctx.getImageData(i, j, 1, 1);

            divpixelblocks = document.createElement('div');
            divpixelblocks.classList.add("tilessty");
            var tmppid = 'id' + i;
            tmppid = tmppid + j
            divpixelblocks.setAttribute('id', tmppid);

            var data = imgPixelMatrixMain[i][j].data;
            divpixelblocks.setAttribute('style', 'background-color: #' + RGB2Hex(data));
            rowforadd.appendChild(divpixelblocks);



        }
    }
}
