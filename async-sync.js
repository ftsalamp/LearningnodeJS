var fs = require('fs');

//Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Async read: " + data.toString());
});

//Synchronous read

var data = fs.readFileSync('input.txt')
console.log("synchronous read: " + data.toString());

console.log("Program ended");