var app = require("express")();
app.set("view engine","ejs");//define variaveis para dentro do express
app.set("views","./app/views");//local onde estao as views
module.exports = function(){
    console.log("modulo esta sendo carregado");
    return app;    
}