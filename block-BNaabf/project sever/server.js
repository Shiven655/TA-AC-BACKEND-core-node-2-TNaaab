// console.log(__dirname);
// console.log(__filename);
let path = require('path');
// console.log(path.join(__dirname, "/client/index.js"));
let http = require('http');
const { format } = require('path');
let fs = require('fs');
let subForm = document.querySelector('form');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let store = '';
  let dataFormat = req.headers['content-type'];
  res.writeHead(201, { 'Content-Type': 'text/html' });
  fs.createReadStream('./form.html').pipe(res);
  /*
  req.on('data', (chunk) => {
    if(req.method === "GET" && req.url === '/form'){
      subForm.addEventListener('submit', (event) => {
      })
    }
  });
  req.on('end', () => {
    
  })
  */
}

server.listen(5678, () => {
  console.log('server has started to listen');
});
