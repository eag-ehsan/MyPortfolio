var isdraw = false;
var Xs = 0;
var Ys = 0;
let prevX = null
let prevY = null
const btall = document.getElementsByName('btnm');

const canvas = document.getElementById('esmpcan');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 5;
var Width1 = canvas.width ;
var Height1 = canvas.height ;
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
const pen1 = document.getElementById('pen1');
const pen2 = document.getElementById('pen2');
const brush1 = document.getElementById('brush1');
const escolor = document.getElementById('escolor');
var i = 0, j = 0;
for (i = 0; i < btall.length; i++) {
    btall[i].addEventListener('click', btclicked);
    btall[i].setAttribute('data-id', i)
    btall[i].setAttribute('style','border: none; color: white;');
}

function btclicked() {
    let idbt = this.getAttribute('data-id');
    for (i = 0; i < btall.length; i++) {
        if(idbt==i)
        {
            btall[i].setAttribute('style','border: 2px solid rgb(76, 9, 139); color: yellow;')
        }else{
            btall[i].setAttribute('style','border: none; color: white;')
        }
        
    }
    document.getElementById("exporttxt").innerHTML = idbt;
    
    if(idbt==0)
    {
        changemousecur(pen1);
    }else if(idbt==1)
    {
        changemousecur(pen2);
    }else if(idbt==2)
    {
        changemousecur(brush1);
        clearall();
    }else if(idbt==3)
    {
        changemousecur(14);
    }
    
}
function chngcanvascolor()
{
    ctx.strokeStyle = escolor.value;
}
function changemousecur(x) {
    var urrr = 'url(' + x.src + ')';
    urrr = urrr + ', auto'
    
    canvas.style.cursor = urrr;
    
    
  }
  function clearall()
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  chngcanvascolor();
canvas.addEventListener('mousedown', (e) => {
    isdraw = true;
    
});

canvas.addEventListener('mouseup', e => {
    isdraw = false;
    
});

canvas.addEventListener('mousemove', draw);
function draw(e){
    if(prevX == null || prevY == null || !isdraw){
        prevX = e.offsetX
        prevY = e.offsetY
        return
    }
    
    

    let currentX = e.offsetX
    let currentY = e.offsetY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    chngcanvascolor();
    ctx.stroke();

    prevX = currentX
    prevY = currentY
    document.getElementById("exporttxt").innerHTML = prevX + ' ' + prevY ;
	
	
}


