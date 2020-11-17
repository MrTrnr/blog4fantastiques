var express = require('express');//stocke express dans une variable
var mongoose = require('mongoose');//stocke mongoose dans une variable

// connect to database
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
//cherche un fichier config.blog.json
const urlblog = require("./config_blog.json");
// var urlmongo = va chercher l'adresse de la base de données.
var urlmongo = urlblog.url;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});

// server variables
var hostname = 'localhost';
var port = 3000;
var app = express();


// ajout pour les erreurs cross origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var multer = require('multer')().single();
//app.use(multer);

// model for Piscine
var piscineSchema = mongoose.Schema({
    auteur: String,
    titre: String,
    paragraphe: String,
    date: String
});
var Piscine = mongoose.model('Piscine', piscineSchema);

// routes
var myRouter = express.Router();

// route for homepage
myRouter.route('/')
    .all(function(req,res){
        res.json({message : "Bienvenue sur notre API de piscine", methode : req.method});
    });

myRouter.route('/piscines')
    // route to get list of Piscines
    .get(function(req,res){
        Piscine.find(function(err, piscines){
            if (err){
                res.send(err);
            }
            res.json(piscines);
        });
    })


    // route to add a Piscine
    .post(function(req,res){
    
        var piscine = new Piscine();
        // test
    	console.log(req.body);
        piscine.auteur = req.body.auteur;
        piscine.titre = req.body.titre;
        piscine.paragraphe = req.body.paragraphe;
        piscine.date = req.body.date;
        piscine.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message : 'Bravo, la piscine est maintenant stockée en base de données'});

        });
    });

myRouter.route('/piscines/:piscine_id')
    // route to get a piscine
    .get(function(req,res){
        Piscine.findById(req.params.piscine_id, function(err, piscine) {
            if (err)
                res.send(err);
            res.json(piscine);
        });
    });

app.use(myRouter);



// run server
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});