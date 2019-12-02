var fs = require('fs');
fs.readFile(__dirname +"/text.txt",'utf8',function (err,data) {
    console.log(data);
})
console.log("Call Me");