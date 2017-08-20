var http = require("http");

var server = http.createServer(function (request,response) {
    if(request.url == "/produtos"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end("<html><body><h1></h1>Listando os protdutos</body></html>");
    }else{
        response.end("<html><body><h1></h1>Home da Casa do Codigo</body></html>");
    }
    
});

server.listen(3000,"localhost");

console.log("O Servidor está rodando");