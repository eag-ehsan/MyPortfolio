var isdraw = false;
var rasplvl = 1;
var bx = 0;
var by = 0;
var px = [];
var py = [];
var cx = [];
var cy = [];
var tmpval = [];
var linwidval=0;
var whichpen = 0;
const btall = document.getElementsByName('btnm');

const canvas = document.getElementById('esmpcan');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 2;
var Width1 = canvas.width;
var Height1 = canvas.height;
bx = Width1 / 2;
by = Height1 / 2;
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

const pen1 = document.getElementById('pen1');
const pen2 = document.getElementById('pen2');
const pen11 = document.getElementById('pen11');
const pen22 = document.getElementById('pen22');
const brush1 = document.getElementById('brush1');
const RASP = document.getElementById('RASP');
const escolor = document.getElementById('escolor');
var i = 0, j = 0;
for (i = 0; i < btall.length; i++) {
    btall[i].addEventListener('click', btclicked);
    btall[i].setAttribute('data-id', i)
    btall[i].setAttribute('style', 'border: none; color: white;');
}

function btclicked() {
    let idbt = this.getAttribute('data-id');
    if (idbt == 5) {
        clearall();
        return;
    }
    for (i = 0; i < btall.length; i++) {
        if (idbt == i) {
            btall[i].setAttribute('style', 'border: 2px solid rgb(76, 9, 139); color: yellow;')
        } else {
            btall[i].setAttribute('style', 'border: none; color: white;')
        }

    }
    document.getElementById("exporttxt").innerHTML = idbt;

    whichpen = idbt;
    if (idbt == 0) {
        rasplvl = 1;
        changemousecur(pen1);
        linwidval =1;
        

    } else if (idbt == 1) {
        rasplvl = 1;
        changemousecur(pen11);
        linwidval = 3;
    } else if (idbt == 2) {
        rasplvl = 1;
        changemousecur(pen2);
        linwidval = 5;
    } else if (idbt == 3) {
        rasplvl = 1;
        changemousecur(pen22);
        linwidval = 7;
    } else if (idbt == 4) {
        changemousecur(RASP);
        rasplvl = 4;
    }

}
function chngcanvascolor() {
    ctx.strokeStyle = escolor.value;
    ctx.fillStyle = escolor.value;
}
function changemousecur(x) {
    var urrr = 'url(' + x.src + ')';
    urrr = urrr + ', auto'

    canvas.style.cursor = urrr;


}
function clearall() {
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
function draw(e) {
    let bounds = canvas.getBoundingClientRect()
    if (rasplvl == 1) {

        if (px[0] == null || py[0] == null || !isdraw) {
            px[0] = e.offsetX
            py[0] = e.offsetY
            return
        }
        ctx.lineWidth = linwidval;
        cx[0] = e.offsetX
        cy[0] = e.offsetY
        ctx.beginPath()
        ctx.arc(px[0], py[0], 0, 0, 2 * Math.PI);
        ctx.arc(cx[0], cy[0], 0, 0, 2 * Math.PI)
        ctx.fill();
        ctx.stroke();
        px[0] = cx[0]
        py[0] = cy[0]

    } else if (rasplvl == 4) {

        if (px[0] == null || py[0] == null || px[1] == null || py[1] == null || px[2] == null || py[2] == null || px[3] == null || py[3] == null || !isdraw) {
            px[0] = e.offsetX
            py[0] = e.offsetY
            tmpval = getSquad1(px[0], py[0], bx, by);
            px[1] = tmpval[0];
            py[1] = tmpval[1];
            tmpval = getSquad2(px[0], py[0], bx, by);
            px[2] = tmpval[0];
            py[2] = tmpval[1];
            tmpval = getSquad3(px[0], py[0], bx, by);
            px[3] = tmpval[0];
            py[3] = tmpval[1];
            return
        }

        cx[0] = e.offsetX
        cy[0] = e.offsetY
        tmpval = getSquad1(cx[0], cy[0], bx, by);
        cx[1] = tmpval[0];
        cy[1] = tmpval[1];
        tmpval = getSquad2(cx[0], cy[0], bx, by);
        cx[2] = tmpval[0];
        cy[2] = tmpval[1];
        tmpval = getSquad3(cx[0], cy[0], bx, by);
        cx[3] = tmpval[0];
        cy[3] = tmpval[1];

        for (i = 0; i < 4; i++) {
            ctx.lineWidth = linwidval;
            ctx.beginPath()
            ctx.arc(px[i], py[i], 0, 0, 2 * Math.PI);
            ctx.arc(cx[i], cy[i], 0, 0, 2 * Math.PI)
            ctx.fill();
            ctx.stroke();

            px[i] = cx[i];
            py[i] = cy[i];
        }


    }


    document.getElementById("exporttxt").innerHTML = px[0] + ' ' + py[0] + 'bounds: ' + bounds.x + ' ' + bounds.y;


}


function getSquad1(ix, iy, basex, basey) {
    var ox = 0, oy = 0;
    ox = ix - (2 * (ix - basex));
    oy = iy;
    return [ox, oy];
}
function getSquad2(ix, iy, basex, basey) {
    var ox = 0, oy = 0;
    ox = ix - (2 * (ix - basex));
    oy = iy + (2 * (basey - iy));
    return [ox, oy];
}
function getSquad3(ix, iy, basex, basey) {
    var ox = 0, oy = 0;
    ox = ix;
    oy = iy + (2 * (basey - iy));
    return [ox, oy];
}

