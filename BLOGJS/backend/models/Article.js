const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	
    auteur: {type:String},
    titre: {type:String},
    contenu: {type:String},
    date: {type:String},
    
});
  /*title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },*/
//});

module.exports = mongoose.model('Article', articleSchema);