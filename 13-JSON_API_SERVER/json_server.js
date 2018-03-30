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

    // returns a URL object
    // arg #1: URL
    // [arg#2]: parse query string into object
    // [arg#3]: ID host by "//<host>/foo/bar"
    let urlParsed = url.parse(req.url, true)

    // create a date object from the 'iso' query param
    let date = new Date(urlParsed.query.iso)

    // Handle logic based on URI path
    var payload
    if (urlParsed.pathname.toString() === '/api/parsetime') {
        // parse the time to JSON
        payload = parseTime(date)
        
    } else if (urlParsed.pathname.toString() === '/api/unixtime') {
        // convert time to epoch time
        payload = parseEpochTime(date)
    }

    if (payload) {
        // if we got a result, send a JSON 200
        res.writeHead(200, "OK", { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(payload)) // JSON -> String before responding
    } else {
        // If there was no result, write a 404
        logger.error('404: Not Found')
        res.writeHead(404, "Not Found")
        res.end()
    }

})

/*
    Params:
        (String) date: Date object
    Returns:
        JSON formatted hour, minute, and second values.
 */
function parseTime(date) {
    
    let dateHours = date.getHours()
    let dateMinutes = date.getMinutes()
    let dateSeconds = date.getSeconds()
    
    return {hour: dateHours, minute: dateMinutes, second: dateSeconds}
}

/*
    Params:
        (String) date: Date object
    Returns:
        JSON formatted epoch time equivalent
 */
function parseEpochTime(date) {

    let dateUnixTime = date.getTime()

    return {unixtime: dateUnixTime}
}

server.listen(listenPort)
