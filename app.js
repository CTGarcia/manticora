var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.write('Manticora v0.1');
  res.end();
});

server.listen(8080);
console.log("Manticora running on port 8080");