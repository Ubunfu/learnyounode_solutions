// hook up all my modules
var http = require('http')
var transformer = require('through2-map')
var bunyan = require('bunyan') // cool logger module

// locals
var listenPort = process.argv[2]
var logger = bunyan.createLogger({name: "http"})

var server = http.createServer((req, res) => {

    // check for POST method
    if (req.method !== 'POST') {
        logger.error('405: Method Not Allowed')
        res.writeHead(405)
        res.end();
    }

    // pipe the request data into the transformer...
    req.pipe(transformer((chunk) => {
        // do the transformation with the chunk
        // add a newline to avoid that weird '%' char at the end
        return (chunk + '\n').toString().toUpperCase()
    })).pipe(res)  // then pipe the result to the response stream

})

server.listen(listenPort)