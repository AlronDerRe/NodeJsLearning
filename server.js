let express = require('express');

let app = express();


app.get('/', function(req, resp){
    resp.send("Encore un nouveau message d'acceuil !");
});

app.listen(8080);