// Require fs again
var fs = require('fs');

// Set up arguments
var dirPath = process.argv[2];
var fileType = process.argv[3];

// Read the directory asynchronously, as a utf8 string
fs.readdir(dirPath,'utf8',
    (err, data) => {
        
        // Errors are not tolerated
        if(err) { throw err}
        
        // Print files to the screen that match the desired type
        data.forEach(fileName => {

            // Only match if the extension is the right one
            if (fileName.endsWith("." + fileType)) {
                console.log(fileName);
            }
        });
    }
);

