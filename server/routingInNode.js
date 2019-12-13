let http = require("http");
let fs = require("fs");

http.createServer(function(req , resp){
    if(req.url === "/"){
        resp.writeHeader(200,{"contnent-type":"text/html"})
        fs.createReadStream(__dirname+"/index.html").pipe(resp);
        return
    }else if(req.url === "/api"){
        resp.writeHeader(200,{"contenbt-type":"application/json"});
        let data = {
            name:"JOPE",
            surname:"JOE"
        }
        resp.end(JSON.stringify(data));
    }else{
        resp.writeHeader(400);
        resp.end("Page Not Available");
    }

}).listen(2770);
