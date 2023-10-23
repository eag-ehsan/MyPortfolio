let PNUMBERS = 36*8;
let MIND = 20;
let MAXL = 200;
let ZEKHAMATL = 20;
var imageWidth = 0;
var sizePower2 = 0;
var PNUMBERSPower2 = PNUMBERS * PNUMBERS;
var i = 0, j = 0, k = 0, mainCounter=0;
var imageHeight = 0;
var Lsequ = [];
var mikh = 0;
var toolNakh = 0;
var mikhLast = [];
var errorLine = -1;
var errorMax = -1;
var mikhbest = -1;
var imgid1 = document.getElementById("imgid1");
var inFile = document.getElementById("fileInput");
var canvas1 = document.getElementById("canvas1id");
var goodjob = document.getElementById("goodjob");
var esStatus = document.getElementById("esStatus");
var esPercent = document.getElementById("esPercent");
var imgmatrixid = document.getElementById("imgmatrixid");
var ctx = canvas1.getContext('2d');
var pinCoordinates = [];

var poosheshLine = [];
var err_2dim_matrix = [];
var line_NxN_matrix_x;
var line_NxN_matrix_y;
var line_PxP_matrix_l;
var line_PxP_matrix_z;



var rowDives = null;
var divpixelblocks = null;
var imgPixelMatrixMain = []
var imgPixelMatrix = [];

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
    sizePower2 = imageWidth * imageWidth;
    ctx.canvas.width = imageWidth;
    ctx.canvas.height = imageHeight;

    ctx.clearRect(0, 0, imageWidth, imageHeight);
    ctx.drawImage(img1, 0, 0, imageWidth, imageHeight, 0, 0, imageWidth, imageHeight);
    es_len = imageHeight;
    
    for (i = 0; i < imageWidth; i++) {
        imgPixelMatrixMain[i] = [];
        imgPixelMatrix[i] = [];
    }

    
    var allpx = ctx.getImageData(0, 0, imageWidth, imageHeight);
    for(var y = 0; y < allpx.height; y++){
        for(var x = 0; x < allpx.width; x++){
            var pp = (y * 4) * allpx.width + x * 4;
            var esavg = (allpx.data[pp] + allpx.data[pp + 1] + allpx.data[pp + 2]) / 3;
            esavg = Math.floor(esavg);
            allpx.data[i] = esavg; 
            allpx.data[i + 1] = esavg; 
            allpx.data[i + 2] = esavg;
            imgPixelMatrix [y][x] = esavg;
        }
    }


    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(imageWidth / 2, imageHeight / 2, imageHeight / 2, 0, Math.PI * 2);
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

function escreatmatrix() {
    var pixel = null;
    var data = [];

/*
    
    for (j = 0; j < imageHeight; j++) {
        rowDives = document.createElement('div');
        rowDives.classList.add("rowdives");
        rowDives.setAttribute('id', 'rowid' + j);
        //imgmatrixid.appendChild(rowDives);
        //var rowforadd = document.getElementById('rowid' + j);
        for (i = 0; i < imageWidth; i++) {


            imgPixelMatrixMain[i][j] = ctx.getImageData(i, j, 1, 1);

            divpixelblocks = document.createElement('div');
            divpixelblocks.classList.add("tilessty");
            var tmppid = 'id' + i;
            tmppid = tmppid + j
            divpixelblocks.setAttribute('id', tmppid);

            var data = imgPixelMatrixMain[i][j].data;
            
            var tmp1;
            tmp1 = Math.floor((data[0] + data[1] + data[2])/3); 
            imgPixelMatrix [i][j] = tmp1;
            divpixelblocks.setAttribute('style', 'background-color: #' + RGB2Hex(data));
            //rowforadd.appendChild(divpixelblocks);



        }



    }

*/

 
    esStatus.innerHTML = esStatus.innerHTML + ' \n ' + 'Making image color matrix done.';
    pinCoordsCalc();
    calcLines1();
}

function pinCoordsCalc() {

    var cr = imageWidth / 2;
    var rr = imageWidth / 2 - 1/2;
    var angg;
    for (i = 0; i < PNUMBERS; i++) {
        angg = 2 * Math.PI * i / PNUMBERS;
        var xxx = Math.floor(cr + rr * Math.cos(angg));
        var yyy = Math.floor(cr + rr * Math.sin(angg));
        pinCoordinates.push([xxx, yyy]);

    }
}


function gettingErrorline(myArray, coords1, coords2){
    let result = new Uint8Array(coords1.length);
    for(i=0;i<coords1.length;i++){
        result[i] = myArray[coords1[i]][coords2[i]];
    }
    var tmpsum = 0;
    for(i=0;i<result.length;i++){
        tmpsum += result[i];
    }
    return tmpsum;
}

function setLineCoordinatesToArray(array1, crds1, crds2, line){
    for(i=0;i<crds1.length;i++){
        array1[crds1[i]][crds2[i]] = line;
    }
    return array1;
}
function subArr(arr1, arr2) {
    for (i=0;i<imageWidth;i++){
        for(j=0;j<imageWidth;j++){
            arr1[i][j] = arr1[i][j] - arr2[i][j];
            if(arr1[i][j]<0){
                arr1[i][j]=0;
            }else if(arr1[i][j]>255){
                arr1[i][j]=255;
            }
        }
    }
    return arr1;
}



function calcLines1() {
    var x1, y1, x2, y2, xmat, ymat, dist;
    line_NxN_matrix_y = Array.apply(null, { length: (PNUMBERSPower2) });
    line_NxN_matrix_x = Array.apply(null, { length: (PNUMBERSPower2) });
    line_PxP_matrix_l = Array.apply(null, {length: (PNUMBERSPower2)}).map(Number.prototype.valueOf,0);
    line_PxP_matrix_z = Array.apply(null, {length: (PNUMBERSPower2)}).map(Number.prototype.valueOf,1);

    for (i = 0; i < PNUMBERS; i++) {
        for (j = (i + MIND); j < PNUMBERS; j++) {
            x1 = pinCoordinates[i][0];
            y1 = pinCoordinates[i][1];

            x2 = pinCoordinates[j][0];
            y2 = pinCoordinates[j][1];

            dist = Math.floor(Number(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))));



            xmat = pixelCounterArray(x1, x2, dist);
            ymat = pixelCounterArray(y1, y2, dist);

            line_NxN_matrix_y[j * PNUMBERS + i] = ymat
            line_NxN_matrix_y[i * PNUMBERS + j] = ymat
            line_NxN_matrix_x[j * PNUMBERS + i] = xmat
            line_NxN_matrix_x[i * PNUMBERS + j] = xmat
        }
    }


    esStatus.innerHTML = esStatus.innerHTML + ' \n ' + 'Lines caclcing first step is done.';


    for (i=0;i<imageWidth;i++)
    {
        err_2dim_matrix[i] = []
    }
    for (i=0;i<imageWidth;i++){
        for(j=0;j<imageWidth;j++){
            if(j==124)
            {
                j=124;
            }
            err_2dim_matrix[i][j] = (0x01 * 0xFF) - imgPixelMatrix[i][j];
            j = j +0;
        }
    }
    for (i=0;i<imageWidth;i++)
    {
        poosheshLine[i] = []
    }
    for (i=0;i<imageWidth;i++){
        for(j=0;j<imageWidth;j++){
            poosheshLine[i][j] = 0;
        }
    }
    var mikhtesti;
    var k_k,k_k_k;
    Lsequ.push(0);
    


    (function es_survive_loop(){
        if(mainCounter < MAXL){
            
            errorLine = -1;
            errorMax = -1;
    
            for(k=MIND; k<(PNUMBERS - MIND); k++) {
                if(k==(PNUMBERS - MIND-2))
                {
                    k==(PNUMBERS - MIND-2);
                }
                if(k==158)
                {
                    k=158;
                }
                mikhtesti = (mikh + k) % PNUMBERS
                if(mikhLast.includes(mikhtesti)){
                    continue;
                }else{
                    k_k = mikhtesti * PNUMBERS + mikh;
                    xmat = line_NxN_matrix_x[mikhtesti * PNUMBERS + mikh];
                    ymat = line_NxN_matrix_y[mikhtesti * PNUMBERS + mikh];
    
                    errorLine = gettingErrorline(err_2dim_matrix, ymat, xmat)  * line_PxP_matrix_z[mikhtesti * PNUMBERS + mikh];
                    if( errorLine > errorMax){
                        errorMax = errorLine
                        mikhbest = mikhtesti
                        k_k = k_k_k;
                    }
                }
            }
    
            Lsequ.push(mikhbest);
            
            xmat = line_NxN_matrix_x[mikhbest * PNUMBERS + mikh];
            ymat = line_NxN_matrix_y[mikhbest * PNUMBERS + mikh];
            crds1=line_NxN_matrix_y[mikhbest * PNUMBERS + mikh];
            crds2=line_NxN_matrix_x[mikhbest * PNUMBERS + mikh];
            var zekh = ZEKHAMATL * line_PxP_matrix_z[mikhbest * PNUMBERS + mikh];
    
            for (i=0;i<imageWidth;i++){
                for(j=0;j<imageWidth;j++){
                    poosheshLine[i][j] = 0;
                }
            }
            
            poosheshLine = setLineCoordinatesToArray(poosheshLine, ymat, xmat, zekh);
            err_2dim_matrix = subArr(err_2dim_matrix, poosheshLine);
    
            /*
            x1 = pinCoordinates[mikh][0];
            y1 = pinCoordinates[mikh][1];
    
            x2 = pinCoordinates[mikhbest][0];
            y2 = pinCoordinates[mikhbest][1];
    
            var tmpdistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            */
    
            mikhLast.push(mikhbest);
            if(mikhLast.length > MIND){
                mikhLast.shift();
            }
            mikh = mikhbest;
            esPercent.innerHTML =  ' ' + mainCounter + ' lines completed'	;	
    
            mainCounter++;
            setTimeout(es_survive_loop, 0);
        } else {
            esPercent.innerHTML =  'All lines completed'	;	
            goodjob.value = Lsequ;
        }
    })();

    




}
function pixelCounterArray(startPoint, endPoint, distancePoints) {
    var iCounter;
    var returnArray = Array(distancePoints);
    if (distancePoints < 2) {
        if (distancePoints == 1) {
            returnArray[0] = startPoint;
        } else {
            returnArray = [];
        }
        return returnArray;
    }
    for (iCounter = 0; iCounter < distancePoints; iCounter++) {
        returnArray[iCounter] = Math.floor((iCounter * endPoint + ((distancePoints-1) - iCounter) * startPoint) / (distancePoints-1));
    }
    return returnArray;
}
