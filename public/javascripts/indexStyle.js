


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
        
        document.getElementById('bookh').style.width = 0;
        document.getElementById('bookh').style.opacity = 0;
        document.getElementById('book1').style.width = 0;
        document.getElementById('book2').style.width = 0;
        
        document.getElementById('petAdRiUp').style.opacity = 0;
        document.getElementById('petAdLiUp').style.opacity = 0;
        

       
    }else{
        
        document.getElementById('addContainerRight').style.width = '220px';
        document.getElementById('addContainerLeft').style.width = '220px';
        
        document.getElementById('bookh').style.opacity = 1;
        document.getElementById('bookh').style.width = '250px';
        document.getElementById('book1').style.width = '170px';
        document.getElementById('book2').style.width = '170px';
        /*document.getElementById('book1S').style.width = '170px';
        document.getElementById('book2S').style.width = '170px';*/


        document.getElementById('petAdRiUp').style.opacity = 1;
        document.getElementById('petAdLiUp').style.opacity = 1;
       /* document.getElementById('petAdRiUpS').style.opacity = 1;
        document.getElementById('petAdLiUpS').style.opacity = 1;*/

    }
    
    
};


