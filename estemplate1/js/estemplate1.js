//###########################################################
//###########################################################
//#############                             #################
//############# ES(Ehsan A.G.) Code Samples #################
//#############         Draw Hexagons       #################
//#############                             #################
//###########################################################
//###########################################################


//-------- Base params --------------------------------------
var sideOfHwxagon = 60;
var numberOfScrollPages = 3;
//-----------------------------------------------------------

const esmain = document.getElementById('esmain');
var eshextiles = null;
var tiles_top_offset = 0, i = 0, j = 0, t_top = 0, t_left = 0, t_gap_top = 0;
var t_gap_left = 0, tiles_top = 0, tiles_left = 0, es_w = 0, es_h = 0;
var es_hexagon_row_numbers = 0, es_hexagon_col_numbers = 0;
var tiles_top_gap = 0, tiles_left_gap = 0;

function hexToRGB(hexString) {
    var color = [];
    color[0] = parseInt(hexString.substring(0, 2), 16);
    color[1] = parseInt(hexString.substring(2, 4), 16);
    color[2] = parseInt(hexString.substring(4, 6), 16);
    return color;
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

function ESGradientColorGenerator(clr1, clr2, numberofColors) {

    var iCount = 0, clrStep = 0.0, tempColors = [];
    var color1 = hexToRGB(clr1);
    var color2 = hexToRGB(clr2);
    var colorArrayOutput = [];

    for (iCount = 0; iCount < numberofColors; iCount++) {
        clrStep += (1.0 / numberofColors);
        tempColors[0] = color1[0] * clrStep + (1 - clrStep) * color2[0];
        tempColors[1] = color1[1] * clrStep + (1 - clrStep) * color2[1];
        tempColors[2] = color1[2] * clrStep + (1 - clrStep) * color2[2];

        colorArrayOutput.push(RGB2Hex(tempColors));

    }

    return colorArrayOutput;

}



function creatHexagons() {
    

    while (esmain.firstChild) {
        esmain.removeChild(esmain.lastChild);
    }
    es_w = window.innerWidth, es_h = window.innerHeight
    tiles_top_gap = sideOfHwxagon * 0.066;
    tiles_left_gap = sideOfHwxagon * 0.05;
    tiles_left = sideOfHwxagon * Math.sqrt(3) / 2;
    tiles_top = 3 * sideOfHwxagon;
    es_hexagon_row_numbers = Math.ceil(es_w / tiles_left);
    es_hexagon_col_numbers = Math.ceil(es_h * numberOfScrollPages / tiles_top);
    
    for (j = -1; j < es_hexagon_row_numbers; j++) {
        if (j % 2 == 0) {
            tiles_top_offset = tiles_top_gap;
            t_gap_top = 2 * tiles_top_gap;
            t_gap_left = tiles_left_gap;
            for (i = 0; i < es_hexagon_col_numbers; i++) {
                eshextiles = document.createElement('div');
                eshextiles.classList.add("eshextilesclass");
                eshextiles.setAttribute('id', 'evid' + i + j);
                eshextiles.setAttribute('name', 'eshex');
                t_top = Math.floor((tiles_top + t_gap_top) * i + tiles_top_offset);
                t_left = Math.floor((tiles_left + t_gap_left) * j);
                eshextiles.setAttribute('style', 'top: ' + t_top + 'px; left: ' + t_left + 'px');
                esmain.appendChild(eshextiles);

            }
        } else {

            tiles_top_offset = 94 + tiles_top_gap;
            t_gap_top = 2 * tiles_top_gap;
            t_gap_left = tiles_left_gap;
            for (i = -1; i < es_hexagon_col_numbers; i++) {
                eshextiles = document.createElement('div');
                eshextiles.classList.add("eshextilesclass");
                eshextiles.setAttribute('id', 'odid' + i + j);
                eshextiles.setAttribute('name', 'eshex');
                t_top = Math.floor((tiles_top + t_gap_top) * i + tiles_top_offset);
                t_left = Math.floor((tiles_left + t_gap_left) * j);
                eshextiles.setAttribute('style', 'top: ' + t_top + 'px; left: ' + t_left + 'px');
                esmain.appendChild(eshextiles);

            }

        }

    }
}
creatHexagons();

window.addEventListener('resize', creatHexagons);

$(document).ready(function () {

    $(".eshextilesclass").hover(function () {



        $(this).text($(this).attr("id"));
    },

        function () {



            $(this).text("");
        }

    );










});