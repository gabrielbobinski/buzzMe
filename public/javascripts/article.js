
var articlePictureStatus = 0;
var actualArticle = 0;

function nextPicture(id, numImgs){
    
    if (actualArticle != id) {
        
        articlePictureStatus = 1;
        if (actualArticle!=0) {
            
            document.getElementById('article_' + actualArticle).style.backgroundImage = "url('/images/article_" + actualArticle + "/buzzImg_1.jpg')";
            document.getElementById('article_blur_' + actualArticle).style.backgroundImage = "url('/images/article_" + actualArticle + "/buzzImg_blurr.jpg')";
            
            // CLICK SPACE ------------------------------------------------------------------------------------------------
                document.getElementById('article_dark_' + actualArticle).style.opacity = "1";
                document.getElementById('article_dark_' + actualArticle).style.zIndex = "100";
                document.getElementById('article_blur_' + actualArticle).style.zIndex = "90";
                document.getElementById('backward_' + actualArticle).style.backgroundImage = "url('')";
                document.getElementById('forward_' + actualArticle).style.backgroundImage = "url('')";
            // ------------------------------------------------------------------------------------------------------------
        }
        
        actualArticle = id;
        
    }
    
    
    if (articlePictureStatus == 1) {
        
        document.getElementById('article_blur_' + id).style.backgroundImage = "url('')";
        document.getElementById('article_blur_' + id).style.zIndex = "-1";
        
        document.getElementById('forward_' + id).style.backgroundImage = "url('/images/background_forward.png')";
        
        $('#article_dark_' + id).animate({opacity:"0"}, 500, 'linear',
                                         function(){
                                            document.getElementById('article_dark_' + id).style.zIndex = "-1";
                                         });
        
        
        
    }else if(articlePictureStatus== 2){
        
        document.getElementById('backward_' + id).style.backgroundImage = "url('/images/background_backward.png')";
        
    }else if (articlePictureStatus == numImgs) {
        
        articlePictureStatus = 1;
        document.getElementById('backward_' + actualArticle).style.backgroundImage = "url('')";
        
    }
    
    articlePictureStatus = articlePictureStatus + 1;
    document.getElementById('article_' + id).style.backgroundImage = "url('/images/article_" + id + "/buzzImg_" + articlePictureStatus + ".jpg')";
}




function backPicture(id, numImgs){
    
    if(articlePictureStatus == 2){
        
    }else if(articlePictureStatus == 3){
     
       document.getElementById('backward_' + actualArticle).style.backgroundImage = "url('')";
       articlePictureStatus = articlePictureStatus - 1;
       document.getElementById('article_' + id).style.backgroundImage = "url('/images/article_" + id + "/buzzImg_" + articlePictureStatus + ".jpg')";
        
    }else{

        articlePictureStatus = articlePictureStatus - 1;
        document.getElementById('article_' + id).style.backgroundImage = "url('/images/article_" + id + "/buzzImg_" + articlePictureStatus + ".jpg')";
        
    }
    
}





