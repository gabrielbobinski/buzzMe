

function articleOver(id) {
    
    $('#article_blur_' + id).animate({opacity:"1"}, 200, 'linear',
                                     function(){
                                     });
}


function articleOut(id) {
    
    $('#article_blur_' + id).animate({opacity:"0"}, 200, 'linear',
                                     function(){
                                     });
}



function musicHoverOn(){

    document.getElementById('playPause').style.opacity = 0.8;
    
}

function musicHoverOut(){
    
    document.getElementById('playPause').style.opacity = 1;
    
}
















