let PNUMBERS = 360;
let MIND = 30;
let MAXL = 5000;
var imageWidth = 0;
var i = 0, j = 0, k = 0;
var imageHeight = 0;
var imgid1 = document.getElementById("imgid1");
var inFile = document.getElementById("fileInput");
var canvas1 = document.getElementById("canvas1id");
var imgmatrixid = document.getElementById("imgmatrixid");
var ctx = canvas1.getContext('2d');
var pinCoordinates = [];

var line_NxN_matrix_x;
var line_NxN_matrix_y;

var rowDives = null;
var divpixelblocks = null;
var imgPixelMatrixMain = []


inFile.addEventListener("change", (e) => {
    imgid1.src = URL.createObjectURL(e.target.files[0]);
}, false);

//imgonload();
//imgid1.src = 'a4.jpg'
imgid1.onload = function () {
    imageWidth = this.width;
    imageHeight = this.height;
    img1 = new Image();
    img1.src = imgid1.src;

    ctx.canvas.width = imageWidth;
    ctx.canvas.height = imageHeight;

    ctx.clearRect(0, 0, imageWidth, imageHeight);
    ctx.drawImage(img1, 0, 0, imageWidth, imageHeight, 0, 0, imageWidth, imageHeight);
    es_len = imageHeight;


    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(imageWidth / 2, imageHeight / 2, imageHeight / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    for (i = 0; i < imageWidth; i++) {
        imgPixelMatrixMain[i] = [];
    }
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

function escreatmatrix() {
    var pixel = null;
    var data = [];

    for (j = 0; j < imageHeight; j++) {
        rowDives = document.createElement('div');
        rowDives.classList.add("rowdives");
        rowDives.setAttribute('id', 'rowid' + j);
        imgmatrixid.appendChild(rowDives);
        var rowforadd = document.getElementById('rowid' + j);
        for (i = 0; i < imageWidth; i++) {


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
    pinCoordsCalc();
    calcLines1();
}

function pinCoordsCalc() {

    var cr = imageWidth / 2;
    var rr = imageWidth / 2 - 1;

    for (i = 0; i < PNUMBERS; i++) {
        var xxx = Math.floor(cr + rr * Math.cos(angle));
        var yyy = Math.floor(cr + rr * Math.sin(angle));
        pinCoordinates.push([xxx, yyy]);

    }
}
function calcLines1() {
    var x1, y1, x2, y2, xmat, ymat, dist;
    line_NxN_matrix_y = Array.apply(null, { length: (PNUMBERS * PNUMBERS) });
    line_NxN_matrix_x = Array.apply(null, { length: (PNUMBERS * PNUMBERS) });

    for (i = 0; i < PNUMBERS; i++) {
        for (j = (i + MIND); j < PNUMBERS; j++) {
            x1 = pinCoordinates[i][0];
            y1 = pinCoordinates[i][1];

            x2 = pinCoordinates[j][0];
            y2 = pinCoordinates[j][1];

            dist = Math.Floor(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));



            xmat = pixelCounterArray(x1, x2, dist);
            ymat = pixelCounterArray(y1, y2, dist);

            line_NxN_matrix_y[j * PNUMBERS + i] = ymat
            line_NxN_matrix_y[i * PNUMBERS + j] = ymat
            line_NxN_matrix_x[j * PNUMBERS + i] = xmat
            line_NxN_matrix_x[i * PNUMBERS + j] = xmat
        }
    }

}
function pixelCounterArray(startPoint, endPoint, distancePoints) {
    var iCounter;
    var returnArray = [];
    if (distancePoints < 2) {
        if (distancePoints == 1) {
            returnArray[0] = startPoint;
        } else {
            returnArray = [];
        }
        return returnArray;
    }
    for (iCounter = 0; iCounter <= distancePoints; iCounter++) {
        returnArray[iCounter] = Math.floor((iCounter * endPoint + (distancePoints - iCounter) * startPoint) / distancePoints);
    }
    return returnArray;
}
