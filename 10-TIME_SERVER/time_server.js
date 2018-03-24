// include net module for TCP level stuff
var net = require('net');
var strftime = require('strftime');
// locals
var listenPort = process.argv[2];

// create server, passing in a connection listener.
// The listener is called once for every connection
var server = net.createServer((socket) => {
    // Connection Listener code

    // 'socket' is a NodeJS duplex stream, meaning I can read
    // from it and write to it.
    // 'socket' also contains a lot of meta-data about the connection.

    // to write some data:
    // socket.write(data);

    // always remember to close a socket when finished with it.
    // socket.end();

    // alternatively, end() can take a data object to write and end
    // all in one shot.
    // socket.end(data);

    // set timezone as ISO 8601 format
    let strftimeEDT = strftime.timezone('-0400');
    
    // get a formatted date string from this thing
    /*
        Y: the year with the century
        m: the month, padded to 2 digits (01-12)
        d: day of the month, padded to 2 digits (01-31)
        k: he hour (24-hour clock), padded with a leading space for single digit values (0-23)
        M: the minute, padded to 2 digits (00-59)
    */
    let ftimeEDT = strftimeEDT('%Y-%m-%d %k:%M');

    // write to the socket and close it
    socket.end(ftimeEDT + '\n');

});

// Call listen(port) to listen on that port
server.listen(listenPort);

