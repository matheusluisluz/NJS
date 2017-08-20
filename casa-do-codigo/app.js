var express = require("express");
var app = express();

app.set("view engine","ejs");//define variaveis para dentro do express

app.get("/produtos", function (request, response) {
    console.log("listando");
    response.render("produtos/lista");
    
});

app.listen(3000,function () {
    console.log("Servidor Rodando");
    
});