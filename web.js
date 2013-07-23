var fs = require ('fs');

var express = require('express');

var app = express.createServer(express.logger());

//var buffer = fs.readFile('index.html', function(err, data){
//    if(err) throw err;
//});


app.get('/', function(request, response) {
var buffer = fs.readFileSync('index.html');
//var out = buffer.toString();  
response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
