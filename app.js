var cnf = require("./common/config");
var routes = require("./routes");

// var r = require('http');
// var server = r.createServer(function(request,response){
//   response.writeHead(200, {"Content-Type":"text/plain"});
//   response.end("Hello World\n");
// });

var express = require('express');
var app = express();

routes.register(app);

// server.listen(cnf.port);
app.listen(cnf.port, function () {
  //console.log('Example app listening on port ' + cnf.port);
});


console.log("Server is running at http://localhost:" + cnf.port);
