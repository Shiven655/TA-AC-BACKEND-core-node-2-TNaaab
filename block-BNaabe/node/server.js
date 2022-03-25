//Path
let path = require('path');
console.log(__filename);
console.log(__dirname + 'app.js');
console.log('./index.html');
var indexPath = path.join(__dirname, 'index.html');

let qs = require('querystring');

let http = require('http');
const { isGeneratorFunction } = require('util/types');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    var store = '';
    req
      .on('data', (chunk) => {
        store += chunk;
      })
      .on('end', () => {
        res.statusCode = 201;
        var parsedData = qs.parse(store);
        res.end(JSON.stringify(parsedData));
      });
  }
}

server.listen(5000, () => {
  console.log('server is listning on 5k');
});
