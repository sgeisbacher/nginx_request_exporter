//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    if (request.url == '/scripts/randomsleep') {
        setTimeout(function() {
            response.end('It Works!! Path Hit: ' + request.url);
        }, random(500, 4500));
    } else {
        response.end('wrong!! Path: ' + request.url);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

function random(low, high) {
    return Math.random() * (high - low) + low;
}
