module.exports = function (app){
    app.get("/produtos", function (request, response) {
        console.log("Listando produtos");

        var mysql = require("mysql");
        var connection = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "1234",
            database : "casaDoCodigo"
        });
        //quando esse resultado estiver pronto, o driver do mySQL chamará a função
        //essa função, função callBack, recebe como argumento o erro no minimo
        //dizendo se a fução teve erro 
        connection.query("select * from livros", function (err,result) {
            response.send(result);//envia para o navegador
        });

        connection.end();

        response.render("produtos/lista");
        
    })
};
