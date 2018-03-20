var filter = require('./filter_module');

var path = process.argv[2];
var typeFilter = process.argv[3];

console.log(process.argv);

var filesFiltered = filter(path, typeFilter, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            data.forEach(fileName => {
                console.log(fileName);
                
            });
        }


    }
);
