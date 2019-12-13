let http = require("http");
let fs = require("fs");

http.createServer(function(req , resp){
    resp.writeHeader(200,{"content-type":"application/json"});
    let obj = {
        name:"john",
        surname:"joe"
    }

    resp.end(JSON.stringify(obj));
}).listen(1227);
