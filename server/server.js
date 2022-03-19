var http = require('http');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
console.log('server on 8080')



// var    fs = require('fs');
// import fetch from 'node-fetch'

// const fetch = require('node-fetch');
const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings


// fs.readFile('../index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(8000);
// });

 const URL =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=56ae5cd799ae474b9d52f79aa9905119';
axios({
  method: 'get',
  url: URL,
})
  .then(function (response) {
     const objArr= response.data
      console.log(objArr)
})




var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666