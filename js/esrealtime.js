const ymarr = [];
const xmarr = [];
let i = 0;
var checkbool = false;
let iCounter = 0;
var lenData = 400;
var radianScale = 0.01;
var stepToNextIndex = 1;
var startDataIndex = 0;
var endDataIndex = lenData;
var sli1 = document.getElementById("sli1");
var check2 = document.getElementById("check2");
function check2change() {
    if (check2.checked) {
        checkbool = true;
    }
    else {
        checkbool = false;
    }
}
function nxtData() {
    for (i = 0; i < endDataIndex; i++) {
        iCounter = i;
        ymarr[i] = Math.sin(i * radianScale);

        xmarr[i] = i;
        iCounter = i;
    }

}
nxtData();
function shiftpushData() {
    for (i = 1; i < endDataIndex; i++) {

        ymarr[i - 1] = ymarr[i];
    }

    iCounter += stepToNextIndex;
    if (checkbool == true) {
        ymarr[endDataIndex - 1] = sli1.value / 100;
    }
    else {
        ymarr[endDataIndex - 1] = Math.sin(iCounter * radianScale);
    }
}
var options = {
    series: [{
        data: ymarr
    }],
    chart: {
        id: 'realtime',
        height: 350,
        type: 'line',
          
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 100
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    colors: ['#008FFB'],
        
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Dynamic Updating Chart',
        align: 'left'
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'numeric',
        data: xmarr
    },
    yaxis: {

        decimalsInFloat: 2,


        min: -1.1,
        max: 1.1
    },
    legend: {
        show: false
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


window.setInterval(function () {
    //startDataIndex+=stepToNextIndex;
    //endDataIndex+=stepToNextIndex;
    shiftpushData();
    if (checkbool == true) {


    }
    else {
        sli1.value = ymarr[lenData - 1] * 100;
    }


    chart.updateSeries([{
        data: ymarr

    }])
}, 100)

