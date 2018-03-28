var http = require('http')
var url = require('url') // used for "routing requests"
var bunyan = require('bunyan') // cool logger module

//locals
var listenPort = process.argv[2]
var logger = bunyan.createLogger({name: "http"})

var server = http.createServer((req, res) => {
    
    // check for POST method
    if (req.method !== 'GET') {
        logger.error('405: Method Not Allowed')
        res.writeHead(405)
        res.end();
    }

    // pass in the URL to parse, and choice to parse the query string too
    // returns a helpful object
    let urlParsed = url.parse(req.url, true)

    // console.log(urlParsed.query[0].toString())
    

    if (urlParsed.pathname.toString() === '/api/parsetime') {
        // parse the time to JSON
        let payload = timeToJSON('timeToJSON')
        res.writeHead(200)
        res.write(payload)
        
    } else if (urlParsed.pathname.toString() === '/api/unixtime') {
        // convert time to epoch time
        let payload = timeToEpoch('timeToEpoch')
        res.writeHead(200)
        res.write(payload)

    } else {
        logger.error('404: Not Found')
        res.writeHead(404)
    }

    res.end();

})

/*
    Params:
        (String) time: ISO formatted time to parse
    Returns:
        JSON formatted hour, minute, and second values.
 */
function timeToJSON(time) {
    return time
}

/*
    Params:
        (String) time: ISO formatted time to parse
    Returns:
        JSON formatted epoch time equivalent
 */
function timeToEpoch(time) {
    return time
}

server.listen(listenPort)
