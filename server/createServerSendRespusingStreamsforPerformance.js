let http = require("http");
let fs = require("fs");

http.createServer(function (req, resp) {
    resp.writeHeader(200,{"content-type":"text/html"})
    fs.createReadStream(__dirname+"/index.html").pipe(resp);

}).listen("1667")
