var http = require('http');
var fs = require('fs');
var classData = require('./classData.js');
var studentFeedback = require('./studentFeedback.js');
var calculation = require('./calculation.js');

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
        var classCode = data[0].split('classcode=')[1];
        var dateString = data[1].split('date=')[1];
        var objectives = data[2].split('objectives=')[1].split('::');
        classData(classCode, dateString, objectives);
        res.writeHead(200, {"Content-type": "text/html"});
        res.end('Thanks, your submission has been successful');
    } else if (url.indexOf('studForm') > -1 ) {
        fs.readFile(__dirname + '/student.html', function(error, index){
            if (error) {
                res.end();
            } else {
                res.end(index);
            }
        });
    } else if (url.indexOf('studInp') > -1) {
        var studInp = url.split('studInp?')[1];
        var dataArr = studInp.split('&');
        var classCode1 = dataArr[0].split('classcode=')[1];
        var dateString1 = dataArr[1].split('date=')[1];
        var engagement = dataArr[2].split('engagement=')[1];
        var satisfaction = dataArr[3].split('satisfaction=')[1];
        var support = dataArr[4].split('support=')[1];
        var feedbackObj = {"engagement":engagement, "satisfaction":satisfaction, "support":support};

        studentFeedback(classCode1, dateString1, feedbackObj);
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
    } else if (url.indexOf('/display') > -1 ){
        fs.readFile(__dirname +'/display.html',function(error, file){
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(file);
        });
    } else if( url.indexOf('/results')>-1 ){
        console.log('calculating');
        calculation = JSON.stringify(calculation)
        console.log(calculation);

        res.writeHead(200, {"Content-type": "text/html"});
        res.end(calculation);
    }
}

var server = http.createServer(handler);

module.exports = {
	handler: handler,
};

server.listen(port);

console.log("Local host at " + port);
