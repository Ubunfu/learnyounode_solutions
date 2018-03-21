// This is a module file.
// All it does is the reading and filtering part

   // require fs again
   let fs = require('fs');

// Export this module
// Module returns collection of files in the given path
// whose extension match the given filter
module.exports = (path, typeFilter, callback) => {

    fs.readdir(path, 'utf8', (err, data) => {
        
        if (err) {  
            // There was an error reading the path, let the client handle it
            callback(err);
        } else {
            // Everything is fine, filter the files
            filteredFiles = [];
            data.forEach(fileName => {
                if (fileName.endsWith("." + typeFilter)) {
                    filteredFiles.push(fileName);
                }
            });

            // Give the files back to the client to deal with
            callback(null, filteredFiles);
        }
    });
}