let http = require('http');
let fs = require('fs');

let server = http.createServer('handleRequest');
function handleRequest(req, res) {
  fs.createReadStream('./readme.txt').pipe(content);
}
server.listen(4000, () => {
  console.log('server is listning on port 4000');
});
