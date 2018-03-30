var url = require('url')

let date = new Date('2013-08-10T12:10:15.474Z')
let dateHours = date.getHours()
let dateMinutes = date.getMinutes()
let dateSeconds = date.getSeconds()

console.log(JSON.stringify({hour: dateHours, minute: dateMinutes, second: dateSeconds}))
