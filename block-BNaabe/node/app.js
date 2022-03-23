let http = require('http');
let qs = require('querystring');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let store = '';
  let dataFormat = req.headers['content-type'];
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (dataFormat === 'application/x-www-form-urlencoded') {
      let formData = qs.parse(store);
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h1>${formData.name}</h1><h2>${formData.email}</h2>`);
    }
    if (dataFormat === 'application/json');
    let jsonData = JSON.parse(store);
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>${jsonData.name}</h1><h2>${jsonData.email}</h2>`);
  });
}

server.listen(5000, () => {
  console.log('server is listning on 5k');
});
