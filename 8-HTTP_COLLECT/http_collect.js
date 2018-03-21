// http module allows me to send requests and use responses
var http = require('http');

// endpoint is passed as the first argument
var endpoint = process.argv[2];

/*
1) perform an HTTP GET request to a URL provided to you 
    as the first command-line argument
2) collect the parts as they come in with the "data" event
3) print the number of characters received
4) print the complete response as a string
*/

http.get(endpoint, (response) => {

    // Make the response a string
    response.setEncoding('utf8');

    let responseString = '';
    let responseChars = 0;

    // Fires every time a new data chunk comes in from the endpoint
    response.on('data', (data) => {
        responseString += data;         // append the new data
        responseChars += data.length;   // sum the new data piecess
    });

    // Fires when the response is all done
    response.on('end', () => {
        console.log(responseChars);
        console.log(responseString);
    });

});