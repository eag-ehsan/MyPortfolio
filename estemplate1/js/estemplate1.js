
const esmain = document.getElementById('esmain');
var eshextiles = null;
var tiles_top_offset = 0;
var tiles_top = 0;
var tiles_left = 0;
var i=0,j=0;
var t_top=0, t_left=0;
var tiles_top_gap = 4;
var tiles_left_gap = 3;
var t_gap_top=0;
var t_gap_left=0;



for(j=0;j<30;j++)
{
    if(j%2==0){
        tiles_top_offset = tiles_top_gap;
        tiles_top = 30 + 60 + 30 + 60 ;
        tiles_left = 104/2;
        t_gap_top = 2*tiles_top_gap;
        t_gap_left = tiles_left_gap;
        for(i=0;i<20;i++)
        {
            eshextiles = document.createElement('div');
            eshextiles.classList.add("eshextilesclass");
            eshextiles.setAttribute('id', 'evid' + i + j);
            eshextiles.setAttribute('name', 'eshex');
            t_top = (tiles_top + t_gap_top) * i + tiles_top_offset;
            t_left = (tiles_left + t_gap_left) * j ;
            eshextiles.setAttribute('style', 'top: ' + t_top + 'px; left: ' + t_left + 'px');
            esmain.appendChild(eshextiles);
            
        }
    }else{

        tiles_top_offset = 94 + tiles_top_gap;
        tiles_top = 30 + 60 + 30 + 60 ;
        tiles_left = 104/2;
        t_gap_top = 2* tiles_top_gap;
        t_gap_left = tiles_left_gap;
        for(i=0;i<20;i++)
        {
            eshextiles = document.createElement('div');
            eshextiles.classList.add("eshextilesclass");
            eshextiles.setAttribute('id', 'odid' + i + j);
            eshextiles.setAttribute('name', 'eshex');
            t_top = (tiles_top + t_gap_top) * i + tiles_top_offset;
            t_left = (tiles_left + t_gap_left) * j ;
            eshextiles.setAttribute('style', 'top: ' + t_top + 'px; left: ' + t_left + 'px');
            esmain.appendChild(eshextiles);
            
        }
        
    }

}




$(document).ready(function(){

    $(".eshextilesclass").click(function(){
  
  
  
        $(this).text($(this).attr("id"));
        }); 


      



  
  


});