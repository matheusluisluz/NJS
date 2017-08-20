var app = require("./config/express")();
var rortaProdutos = require("./app/route/produtos")(app);

app.listen(3000,function () {
    console.log("Servidor Rodando");
    
});