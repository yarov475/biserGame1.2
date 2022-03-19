var http = require('http');
fs = require('fs');
const rp = require('request-promise');
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=56ae5cd799ae474b9d52f79aa9905119';
import fetch from "node-fetch";
// rp(url)
//   .then(function(html){
//     //success!
//     console.log(html);
//   })
//   .catch(function(err){
//     //handle error
//   });


fs.readFile('../index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);
console.log('server on 8080')


// getData*************************************************************

// const API_KEY = '56ae5cd799ae474b9d52f79aa9905119';
// const URL =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=56ae5cd799ae474b9d52f79aa9905119';
// // const URL =  'https://newsapi.org/v2/everything?q=Apple&from=2022-03-18&sortBy=popularity&apiKey=API_KEY';

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify(_data),
//   headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// function to handle error




// Analize*******************************************************************
let news = 'Str'
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze(news);
console.dir(result);    // Score: -2, Comparative: -0.666

