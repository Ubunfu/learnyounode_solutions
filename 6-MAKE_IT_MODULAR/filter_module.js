// This is a module file.
// All it does is the reading and filtering part

// Export this module
// Module returns collection of files in the given path
// whose extension match the given filter
module.exports = (path, typeFilter, callback) => {

    // require fs again
    let fs = require('fs');

    return fs.readdir(path, 'utf8', callback);
}