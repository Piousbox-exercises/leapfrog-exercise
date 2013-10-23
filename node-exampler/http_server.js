
var express = require('express');

function get_info() {
    return {
        propensity: "0.2333",
        ranking: "C"
            }
}

var server = express();
server.enable("jsonp callback");
server.get("/", function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        res.jsonp(get_info());
        
    });
server.listen(3000);
console.log( 'Listening on port 3000' );