


var pg = require('pg');
var conString = "postgres://postgres:Sa89Ga90Vi90@localhost:5432/buzzMeDB";
var db = null;
//http://ec2-54-93-52-115.eu-central-1.compute.amazonaws.com AWS adress ... 
//var connection = new pg.Client(conString);

module.exports = function () {
    if(!db) {
        db = new pg.Client(conString);
    };
    return db;
};
/*
pg.connect(conString, function(err, client, done) {
           
           console.log("[1] example");
           
           client.query("CREATE TEMP TABLE reviews(id SERIAL, author VARCHAR(50), content TEXT)");
           client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
                        ["mad_reviewer", "I'd buy this any day of the week!!11"]);
           client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
                        ["calm_reviewer", "Yes, that was a pretty good product."]);
           client.query("SELECT * FROM reviews", function(err, result) {
                        console.log("Row count: %d",result.rows.length); // 1
                        for (var i = 0; i < result.rows.length; i++) {
                        var row = result.rows[i];
                        console.log("id: " + row.id);
                        console.log("author: " + row.author);
                        console.log("content: " + row.content);
                        }
                        
                        done();
                        });
           });


pg.connect(conString, function(err, client, done) {
           
           console.log("[2] example");
           
           if(err) {
                return console.error('error fetching client from pool', err);
           }
           
           client.query('SELECT $1::int AS number', ['2'], function(err, result) {
           
                        //call `done()` to release the client back to the pool
                        done();
                        
                        if(err) {
                        return console.error('error running query', err);
                        }
                        console.log(result.rows[0].number);
                        console.log( result.rows.length );
    
                        });
            
           });

*/

 // INSERT OR DELETE DATA ... //
pg.connect(conString, function(err, client, done) {
           
           if(err) {
           return console.error('error fetching client from pool', err);
         	console.log("[+] error connectiong to buzzMeDB");
	   }
           
           console.log("");
           console.log("[+] List of BuzzMeArticles");
           
           //client.query("INSERT INTO buzzmezonearticles(title, numberofpages) VALUES( $1, $2 )", ["Most Beautiful Places You Must Have Visited!", 16]); // currently at state 9 Users
           //client.query("DELETE FROM  buzzarticles WHERE id = '1'");
        
           client.query("SELECT * FROM buzzmezonearticles", function(err, result) {
           //client.query("SELECT * FROM buzzmezonearticles WHERE id = '2' ", function(err, result) {
                        
                        console.log("[-] buzzmezonearticles count: %d",result.rows.length);
                        console.log("");
                        
                        for (var i = 0; i < result.rows.length; i++) {
                        var row = result.rows[i];
                        console.log("ID: " + row.id);
                        console.log("title: " + row.title);
                        console.log("numberOfPages: " + row.numberofpages);
                        }
                        
                        done();
                        });
           });






