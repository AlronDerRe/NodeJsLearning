let express = require('express');
let url = require('url');
let app = express();



app.get('/', function(req, resp){
   
    let params = url.parse(req.url, true).query;
    if(params.year !== undefined)
    {
        if(isNaN(params.year)){
            resp.send("Vous vous trouvez dans une année bien étrange");
        }
        else{
            resp.send("Bienvenue en l'an : " + params.year);
        }
    }
    else
    {
        resp.send("Vous voilà, visiteur intemporel !");
    }

    
});

app.listen(8080);