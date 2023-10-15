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
var startbtn = document.getElementById("startbtn");
var timer = null;
var timerstatus = true;
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
    annotations: {
        yaxis: [{
            y: -1,
            y2: 0,
            borderColor: '#000',
            fillColor: '#FE2019',
            opacity: 0.3,
            label: {
              borderColor: '#FFFFFF',
              style: {
                fontSize: '10px',
                color: '#333',
                opacity:0.1,
                
              },
              text: 'Sub Zero Values',
            }
        }
        ]
    },
    colors: ['#008FFB'],
        
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Any Input streams can be save in a file or DB',
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




function forIntervaltimer() {
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
    starttimer();
}
function starttimer() {  // use a one-off timer
    timer = setTimeout(forIntervaltimer, 100);
};

function stoptimer() {
    clearTimeout(timer);
};
starttimer();
function stopStream()
{
    if(timerstatus){
        stoptimer();
        timerstatus = false;
        startbtn.innerHTML = "Start Again to gathering new Data";
        startbtn.classList.remove("btn-warning");
        startbtn.classList.add("btn-success");
    }
    else{
        starttimer();
        timerstatus = true;
        startbtn.innerHTML = "Stop and analysis existing data";
        startbtn.classList.remove("btn-success");
        startbtn.classList.add("btn-warning");
    }
    updateChartOpt();
}
function updateChartOpt()
{
  
    if(!timerstatus){
        options = {
            series: [{
                data: ymarr
            }],
            chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                  
                
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            annotations: {
                yaxis: [{
                    y: -1,
                    y2: 0,
                    borderColor: '#000',
                    fillColor: '#FE2019',
                    opacity: 0.3,
                    label: {
                      borderColor: '#FFFFFF',
                      style: {
                        fontSize: '10px',
                        color: '#333',
                        opacity:0.1,
                        
                      },
                      text: 'Sub Zero Values',
                    }
                }
                ]
            },
            colors: ['#008FFB'],
                
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Any Input streams can be save in a file or DB',
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

    }
    else{
        options = {
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
            annotations: {
                yaxis: [{
                    y: -1,
                    y2: 0,
                    borderColor: '#000',
                    fillColor: '#FE2019',
                    opacity: 0.3,
                    label: {
                      borderColor: '#FFFFFF',
                      style: {
                        fontSize: '10px',
                        color: '#333',
                        opacity:0.1,
                        
                      },
                      text: 'Sub Zero Values',
                    }
                }
                ]
            },
            colors: ['#008FFB'],
                
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Any Input streams can be save in a file or DB',
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

    }
    chart.updateOptions(options);
    
}


