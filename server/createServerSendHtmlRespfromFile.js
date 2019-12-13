let http = require("http");
let fs = require("fs");

http.createServer(function (req, resp) {
    resp.writeHeader(200,{"content-type":"text/html"})
    let data = fs.readFileSync(__dirname+"/index.html",'utf8');
    let message = "Hello world....!"
    data = data.replace('{message}', message);

    resp.end(data);
}).listen("1667")
