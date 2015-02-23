


function setDimensions(){
    
    viewHeight = $( window ).height();
    viewWidth = $( window ).width();
    
   /* $('.leftDiv').css('width', (viewWidth-800)/2);
    $('.rightDiv').css('width',(viewWidth-800)/2);
    var xpp = ((viewHeight/2)-300)*/
    
};


window.onload = function(){
    setDimensions();
    setSideDivs();
}

$( document ).ready(function(){
                    setDimensions();
                    setSideDivs();
                    });

$( window ).resize(function(){
                    setDimensions();
                    setSideDivs();
                    });

function setSideDivs(){
    
    if(viewWidth < '1075'){
        
        document.getElementById('addContainerRight').style.width = 0;
        document.getElementById('addContainerLeft').style.width = 0;
        document.getElementById('frame1').style.width = 0;
        //document.getElementById('frame2').style.width = 0;
        
        document.getElementById('addContainerRight').style.borderWidth = '0px';
        document.getElementById('addContainerLeft').style.borderWidth = '0px';

        
    }else{
        
        document.getElementById('addContainerRight').style.width = '220px';
        document.getElementById('addContainerLeft').style.width = '220px';
        document.getElementById('frame1').style.width = '200px';
        //document.getElementById('frame2').style.width = '200px';
        
        document.getElementById('addContainerRight').style.borderWidth = '3px';
        document.getElementById('addContainerLeft').style.borderWidth = '3px';
        
    }
    
    
};


