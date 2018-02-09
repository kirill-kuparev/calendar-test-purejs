var express = require("express");
var path = require('path');
var app = express();



// app.use(express.static(__dirname + '/public'))
/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('index.html')
});


/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]);
});




// app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});