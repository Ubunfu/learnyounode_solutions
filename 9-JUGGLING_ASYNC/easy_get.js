// Modules
var http = require('http');

// Modules performs simple get request, and does something
// when it's all finished.
module.exports = (endpoint, callback) => {

    // Call the endpoint
    http.get(endpoint, (response) => {

        let payload = '';
        response.on('data', (data) => {
            payload += data;
        }).setEncoding('utf8');

        response.on('end', () => {
            console.log(payload);
            callback();
        });
    });
};