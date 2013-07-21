var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  //Retrieving data from index.html...
  var welcomeBuffer = fs.readFileSync('index.html');
  var welcomeString = welcomeBuffer.toString();

  response.send(welcomeString);
});

var port = process.env.PORT || 8080;
  app.listen(port, function() {
  console.log("Listening on " + port);
});
