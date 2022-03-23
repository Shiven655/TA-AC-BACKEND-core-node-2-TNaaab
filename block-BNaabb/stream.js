let http = require('http');
var store = '';
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', (data) => {
    console.log(data);
  });
}
server.listen(3456, () => {
  console.log('listning on 4000 ');
});
