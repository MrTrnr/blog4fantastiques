const express = require('express');
const bodyParser = require('body-parser');
const Article = require('./models/Article');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grisbi44:LNkzfvhLASvIiEKM@clustera55.piizd.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 /* product.save()
.then(product => ... ... .json({ product }))
.catch(error => ... ...)*/

app.use('/', (req, res, next) => {
  const Article = [
    {
    auteur: {type:String},
    titre: {type:String},
    contenu: {type:String},
    date: {type:String},
    
    }

    ];
  res.status(200).json({message:'youpi'});
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use (bodyParser.json());


app.get ('/articles', (req, res, next) => {
  Article.find()
    .then(articles => res.status(200).json(articles))
    .catch(error => res.status(400).json({ error }));
});

//{ products: Product[] }

app.get ('/articles/:id', (req, res, next) => {
  Article.findOne({ _id: req.params.id})
    .then(article => res.status(200).json(article))
    .catch(error => res.status(404).json({ error }));
});

//_id { product: Product }

app.post ('/articles', (req, res, next) => 
	{ 
  const article = new Article({
    ...req.body
  });
  article.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});


app.put ('/articles/:id', (req, res, next) => {
  Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!'}))
    .catch(error => res.status(400).json({ error }));
});



app.delete ('/articles/:id',(req, res, next) => {
  Article.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted!'}))
    .catch(error => res.status(400).json({ error }));
});



module.exports = app;