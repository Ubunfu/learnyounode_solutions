var filterModule = require('./filter_module');

var path = process.argv[2];
var typeFilter = process.argv[3];

filterModule(path, typeFilter, (err, filteredFiles) => {
        if (err) {
            // Handle any errors: my way or the highway
            console.log("There was an error!");
        } else {
            // Print out the filtered files
            filteredFiles.forEach(fileName => {
                console.log(fileName);
            });
        }
    }
);