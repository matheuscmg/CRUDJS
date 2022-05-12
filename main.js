const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

    let emailUsuario = [];
    let senhaUsuario = [];
    let nomeUsuario = [];


app.post("/cadastrar", function (req, res) {
     
    emailUsuario.push(req.body.email);
    senhaUsuario.push(req.body.senha);
    nomeUsuario.push(req.body.nome);
    
    console.log(nomeUsuario + " " + emailUsuario )
    res.sendFile(__dirname + "/logar.html")
    
})

app.post("/logar", function (req, res){  
    
    let email = req.body.email;
    let senha =req.body.senha;
    
    for(let i =0; i<emailUsuario.length; i++){

        if(emailUsuario[i] == email  && senhaUsuario[i] == senha)
        {
            res.sendFile(__dirname + "/listar.html");
            res.send(emailUsuario);
            break;
        }
        else if(i == emailUsuario.length-1){
            console.log("Usuario não cadastrado")
            res.send("Usuario não existe!")
            res.status(404);
        }       

    }
})

app.get("/listar", function(req, res){
    res.send(nomeUsuario,emailUsuario)
})

app.listen(PORT, function() {
    console.log(`O servidor está escutando na porta ${PORT}!`);
});
