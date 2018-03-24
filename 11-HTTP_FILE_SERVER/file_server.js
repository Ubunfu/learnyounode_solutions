// use this to talk HTTP 
var http = require('http')
var fs = require('fs')

// locals
var listenPort = process.argv[2]
var localFile = process.argv[3]

// creates server instance
// both 'req' and 'res' are NodeJS Streams, so I can use those 
// abstractions to send/receive data.
var server = http.createServer((req, res) => {
    // server connection logic

    // second arg is for options object.  If it's a string, 
    // then it is the encoding
    let localStream = fs.createReadStream(localFile, 'utf8')

    // pipe the data to the response stream
    localStream.pipe(res)
    
})

server.listen(listenPort)