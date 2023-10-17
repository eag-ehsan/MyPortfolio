
var i = 0;
var j = 0;
var bufmat = [];

var pforsee = document.getElementById("pforsee");
var hoveredColor = document.getElementById("dv1");
var selectedColor = document.getElementById("dv2");
var dv3 = document.getElementById("dv3");
var bynum = document.getElementById("bynum");
var radiobt = document.getElementsByName("optradio");
var changenum = document.getElementById("changenum");
var esimg = document.getElementsByName("esimg");
var canvas = document.getElementById("ehsanimgpr");
var context = canvas.getContext("2d");
const imgg = new Image();
imgg.crossOrigin = "anonymous";
imgg.src = "images/rose.jpg";

imgg.addEventListener("load", () => {
    context.drawImage(imgg, 0, 0);
    
  });
function insertimg(imgid)
{
  
  imgg.crossOrigin = "anonymous";
  imgg.src = esimg[imgid].src;
  //pforsee.innerHTML = esimg[imgid].src;
  imgg.addEventListener("load", () => {
    context.drawImage(imgg, 0, 0);
    imgg.style.display = "none";
  });
}



function pick(event) {
  var bounding = canvas.getBoundingClientRect();
  var x = event.clientX - bounding.left;
  var y = event.clientY - bounding.top;
  var pixel = context.getImageData(x, y, 1, 1);
  var data = pixel.data;

  const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
  hoveredColor.style.backgroundColor = rgba;
  selectedColor.textContent = rgba;

  return rgba;
}

canvas.addEventListener("mousemove", (event) => pick(event));
canvas.addEventListener("click", (event) => pick(event));

function checksomthingcolor() {
  var kchk = 0;
  var kk = 0;
  var pixel = null;
  var data = null;
  var kcounter = 0;
  for (i = 0; i < 500; i++) {
    bufmat[i] = [];
    for (j = 0; j < 500; j++) {
      bufmat[i][j] = []
    }
  }

  for (kk = 0; kk < 3; kk++) {
    if (radiobt[kk].checked) {
      kchk = kk;
    }
  }
  kk = kchk;
  if(bynum.value=="")
    {kchk =0 ;}
  else
    {kchk = bynum.value;}

  const bbyt = ["Red", "Green", "Blue"];

  for (i = 0; i < 500; i++) {
    for (j = 0; j < 500; j++) {
      pixel = context.getImageData(i, j, 1, 1);
      data = pixel.data;
      bufmat[i][j][0] = data[0];
      bufmat[i][j][1] = data[1];
      bufmat[i][j][2] = data[2];
      bufmat[i][j][3] = data[3];




      if (data[kk] == kchk) {
        kcounter++;
      }
    }
  }
  dv3.innerHTML = "Count of " + kchk + " in " + bbyt[kk] + " byte is: [" + kcounter + "]";

}
function changesomthingcolor()
{
  var kchk = 0;
  var kk = 0;
  var pixel = null;
  var data = null;
  var kcounter = 0;
  

  for (kk = 0; kk < 3; kk++) {
    if (radiobt[kk].checked) {
      kchk = kk;
    }
  }
  kk = kchk;
  if(bynum.value=="")
    {kchk =0 ;}
  else
    {kchk = bynum.value;}

  const bbyt = ["Red", "Green", "Blue"];

  for (i = 0; i < 500; i++) {
    for (j = 0; j < 500; j++) {
      pixel = context.getImageData(i, j, 1, 1);
      data = pixel.data;
      
      if (data[kk] == kchk) {
        data[kk] = changenum.value;
      }
      pixel.data = data;
      context.putImageData(pixel,i,j);
    }
  }
 

}