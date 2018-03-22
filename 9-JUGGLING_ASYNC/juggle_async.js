// Modules
var http = require('http');
var easyGet = require('./easy_get');
var bl = require('bl');

// Locals
var endpoint1 = process.argv[2];
var endpoint2 = process.argv[3];
var endpoint3 = process.argv[4];

/*
    Pretty sure I took a little bit unintended route for this one.
    Rather than fire all the requests at once, store the responses in an array,
    and check how many responses I have every time one comes back, this solution
    uses callbacks to ensure that the endpoints are called sequentially and printed
    likewise, eliminating the need to queue responses. 

    This solution would be much slower start-to-finish than the intended solution.
*/

/* easyGet(endpoint1, () => {
    
    easyGet(endpoint2, () => {

        easyGet(endpoint3, () => {});

    });
    
}); */

// 
// Lets give the intended solution a try...
// 

// Calls a specific endpoint and if it's the last one to finish, prints all 
//  of the responses
function goGet (endpoint, index) {

    http.get(endpoint, (response) => {

        // Use this weird library to handle my response building...
        response.pipe(bl((err, data) => {

            // check for errors
            if (err) { 
                return console.error(err);
            }

            // Put this response in it's proper place so that when I print them, 
            // it appears in the right order
            responses[index] = data.toString();
            numResponses++;

            // Check if we have all the responses yet
            // If so, print them off
            if (numResponses === 3) {
                responses.forEach(element => {
                    console.log(element);
                    
                });
            }
        }));
    });

}

var responses = [];     // response payloads
var numResponses = 0;   // response counter

// Immediately call all three endpoints
for (let index = 0; index < 3; index++) {
    goGet(process.argv[index+2], index);
}