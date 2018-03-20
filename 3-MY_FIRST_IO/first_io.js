// Require the 'fs' Node module
var fs = require('fs');

var fileSplit = fs.readFileSync(process.argv[2])    // Read the whole file into a buffer
    .toString()    // Convert buffer to a string
    .split('\n');    // Split the string into chunks at '\n'

// fileSplit.length will be the number of chunks.
// When splitting the string on '\n' there will be one
// more chunk than there were newline chars.  So subtract 1.
// The result is the number of newline chars.
console.log(fileSplit.length-1);