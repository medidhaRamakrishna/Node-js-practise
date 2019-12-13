var http = require("http");

http.createServer(function (req , res) {
    res.writeHeader(200,{"content-type":"text/plain"});
    res.end("Hello world");
}).listen(1100,"127.0.0.1");
