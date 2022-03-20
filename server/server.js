var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
console.log('server on 8080')
var Sentiment = require('sentiment');

var sentiment = new Sentiment();
const axios = require('axios').default;

const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=56ae5cd799ae474b9d52f79aa9905119';

axios({
    method: 'get',
    url: URL,
})
    .then(function (response) {
            let list = [];
            for (let i = 0; i < response.data.articles.length; i++) {
                let news = list.push(sentiment.analyze(response.data.articles[i]['title'])['score'])

            }
            console.log(list, typeof list)

            var val = [];
            for (var key in list) {
                if (list.hasOwnProperty(key)) {
                    let number = list[key]
                    val.push(number)
                }
            }
            console.log(val, typeof val)
        }
    )
// TODO get data from axios
// TODO give sound to sent2sound
// TODO visualise sent2sound
// TODO make refresh
let sent2sound = [
    0, 3, -2, -2, -5, -6, 0,
    -4, 1, 1, 4, -2, -5, 0,
    0, 0, -1, 0, 4, 0
]
console.log(sent2sound, 'length: ', sent2sound.length, typeof sent2sound)


