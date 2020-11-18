var express = require('express');//stocke express dans une variable
var mongoose = require('mongoose');//stocke mongoose dans une variable

// connect to database
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
//cherche un fichier config.blog.json
const urlblog = require("./config_blog.json");
// var urlmongo = va chercher l'adresse de la base de données.
var urlmongo = urlblog.url;
mongoose.connect(urlmongo, options);
var db = mongoose.connection;
console.log (urlblog.url);
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

// model for Article
var articleSchema = mongoose.Schema({
    auteur: String,
    titre: String,
    contenu: String,
    date: String
});
var Article = mongoose.model('Article', articleSchema);

// routes
var myRouter = express.Router();

// route for homepage
myRouter.route('/')
    .all(function(req,res){
        res.json({message : "Bienvenue sur notre API de blog", methode : req.method});
    });

myRouter.route('/articles')
    // route to get list of articles
    .get(function(req,res){
        Article.find(function(err, articles){
            if (err){
                res.send(err);
            }
            res.json(articles);
        });
    })
    // route to add a Article
    .post(function(req,res){
    
        var article = new Article();
        // test
    	console.log(req.body);
        article.auteur = req.body.auteur;
        article.titre = req.body.titre;
        article.contenu = req.body.contenu;
        article.date = req.body.date;
        article.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message : 'Bravo, l\'article est maintenant stocké en base de données'});

        });
    });

myRouter.route('/articles/:article_id')
    // route to get an article
    .get(function(req,res){
        Article.findById(req.params.article_id, function(err, article) {
            if (err)
                res.send(err);
            res.json(article);
        });
    });

app.use(myRouter);



// run server
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});