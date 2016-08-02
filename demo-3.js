var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  
  if(req.url === "/this" && req.method === "GET"){
      res.end('Special');
  } else {
      res.end('Plain');
  }
});
server.listen(8080);