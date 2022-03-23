let http = require('http');
let qs = require('querystring');

var store = '';

let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    var headerType = req.headers['content-type'];
    if (headerType === 'application/json') {
      let data = qs.parse(store);
      res.end(JSON.stringify(data));
    }
    if (headerType === 'application/x-www-form-urlencoded') {
      let data = qs.parse(store);
      res.end(JSON.stringify(data));
    }
  });
}
server.listen(7000, () => {
  console.log('server is listning on 7k');
});
