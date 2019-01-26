let express = require('express');

let app = express();


app.get('/', function(req, resp){
    resp.send("Bienvenue visiteur !");
});

app.listen(8080);