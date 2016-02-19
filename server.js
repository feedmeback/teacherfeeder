var http = require('http');
var fs = require('fs');
// var classData = require('./classData.js');
// var studentFeedback = require('./studentFeedback.js');

var port = process.env.PORT || 4000;

function handler(req, res) {
    var url = req.url;
    if (url.indexOf('teachForm') > -1) {
        fs.readFile(__dirname + '/teacher.html', function(error, index){
            if (error) {
                res.end();
            } else {
                res.end(index);
            }
        });
    }
    else if (url.indexOf('teachSub') > -1) {
        console.log(url);
        var teachSub = url.split('teachSub?')[1];
        console.log(teachSub);
        var data = teachSub.split('&');
        console.log(data);
        var classCode = data[0].split('classcode=');
        var dateString = data[1].split('date=');
        var objectives = data[2].split('objectives=').split('::');
                classData(classCode, dateString, objectives);
        res.writeHead(200, {"Content-type": "text/html"});
        res.end('Thanks, your submission has been successful');
    } else if (url.indexOf('studInp') > -1) {
        var studInp = url.split('studInp?')[1];
        var data1 = studInp.split('&');
        var classCode1 = data1[0].split('classcode=');
        var dateString1 = data1[1].split('date=');
        var feedbackObj = data1[2].split('objectives=').split('::');
                // studentFeedback(classCode1, dateString1, feedbackObj);
        res.writeHead(200, {"Content-type": "text/html"});
        res.end('Congrats! You just gained points for your tribe!');
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
