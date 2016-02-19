var http = require('http');
var fs = require('fs');
var dataHandler = require('./datahandler.js');

var port = process.env.PORT || 4000;

function handler(req, res) {
    var url = req.url;
    if (url.indexOf('teachSub') > 1) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
    } else if (url.indexOf('studInp') > 1) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
    } else if (url.indexOf('teachStat') > 1) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
    } else if (url.indexOf('.') > -1){
        fs.readFile(__dirname + url, function(error, file){
  			if (error) {
				res.writeHead(404, {'Content-Type' : 'text/'});
    			res.end('NOT FOUND!');
  			} else {
    			var ext = url.split('.')[1];
			    res.writeHead(200, {'Content-Type' : 'text/' + ext});
			    res.end(file);
  			}
		});
    }
}

var server = http.createServer(handler);

module.exports = {
	handler: handler,
};

server.listen(port);

console.log("Local host at " + port);
