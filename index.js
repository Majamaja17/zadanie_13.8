var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    fs.readFile('./index.html',  function(err, data) {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.method === 'GET' && request.url === '/') {
            response.write(data);
            response.end();
        } else {
            response.statusCode = 404;
            response.write('<img src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10c2cdddabb33d3900c57b4ee4bfe8ac&auto=format&fit=crop&w=500&q=60" alt="Pictures of the dog">');
            response.end();
        }
    });
});

server.listen(9000);
