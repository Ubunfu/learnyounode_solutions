// Require the 'fs' node module
var fs = require('fs');

// Read file from stdin asyncronously
// 'utf8' option outputs as a string instead of a buffer
// 3rd param is an idiomatic NodeJS callback. Err is truthy if it failed. Data
// contains the string / buffer.
fs.readFile(process.argv[2], 'utf8',
    (err, data) => {

        // Overhand all errors at the user's teeth.
        if (err) { throw err }

        // Split up the string
        let dataSplit = data.split('\n');

        // Count up the number of lines in the file
        let dataNumLines = 0;
        dataSplit.forEach(line => {
            dataNumLines++;
        });

        // There are one less '\n' than lines in the file
        console.log(dataNumLines-1);


    }
);