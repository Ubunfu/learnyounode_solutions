// http module allows me to send requests and use responses
var http = require('http');

// endpoint is passed as the first argument
var endpoint = process.argv[2];

// http.get() == http.request() with the method set to GET
// response is a Node Stream.  It's like an object that emits events.
// 3 useful events: 
//      data: a new data chunk is available for processing from the endpoint
//      error: 
//      end: 
http.get(endpoint, (response) => {

    // response.on() is an event listener
    response.on("data", (data) => {
        console.log(data);
    }).setEncoding('utf8');
});