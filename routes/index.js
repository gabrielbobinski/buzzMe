var express = require('express');
var router = express.Router();


// START SETUP POSTGRES SQL DB ---------------------------------------------

var connection = require('../bin/PGSetup.js')();

    connection.connect(function(err) {
                   if(err) {
                   return console.error('could not connect to postgres', err);
                   }
                   });

    var articles = [0];
	console.log("[+] START BROWSING DB DATA ");
    connection.query("SELECT * FROM buzzmezonearticles", function(err, result) {
                 
                 console.log("[+] PGdb called from index.js");
                 console.log("");
                 
                 for( i=0 ; i<result.rows.length ; i++) {
                    articles[i] = result.rows[i];
                 }
            
                 console.log(articles);
                 });

// END SETUP POSTGRES SQL DB -------------------------------------------------


router.get('/', function(req, res) {
	console.log("[+] test log ... ");
  res.render('index', {
             articlesData: articles,
             jasonData: JSON.stringify(articles)
	     });
});

router.get('/singleArticle/:id', function(req, res) {
           
           var params = req.params;
           var article = [0];
            console.log("  [-]  id of called Article: %d", req.params.id);
           
            connection.query("SELECT * FROM buzzmezonearticles WHERE id = " + req.params.id , function(err, result) {
                             
            if (result.rows.length > 0) {
                             
            article = result.rows[0];
                             
            console.log("ID: " + article.id);
            console.log("title: " + article.title);
            console.log("numberOfPages: " + article.numberofpages);
            
              res.render('singleArticle', {
                  articlesData: article,
                  jasonData: JSON.stringify(article)

               });
             
             } else {
                 res.redirect('/');
             }
            
});
           
});

router.get('/socialArticle/:id', function(req, res) {
           
           var params = req.params;
                    res.render('socialArticle', {
                               id: req.params.id,
                               title: req.params.title,
			       jasonData: JSON.stringify(req.params.id)
                    });

           
           });



connection.end;
module.exports = router;
