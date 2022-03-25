let http = require('http');
var qs = require('querystring');
let fs = require('fs');

let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  let store = '';
  req.on('data', (chunk) => {
      store =+ chunk;
  });
  req.on('end', () => {
    if(req.method === "GET" && req.url === '/form')
    res.setHeader ( 'Content-Type', 'text/html' );
    fs.createReadStream('./form.html').pipe(res);
  });


if(req.method ==="POST" && req.url ==='/form'){
var parsedData = qs.parse(store);
res.setHeader('Content-Type', 'text/html');
res.write(`<h2>${parsedData.name}</h2>`)
res.write(`<h3>${parsedData.email}</h3>`)
res.write(`<h2>${parsedData.age}</h2>`)
res.end()
}

  let dataFormat = req.headers['content-type'];
  

server.listen(5678, () => {
  console.log('server has started to listen');
});
