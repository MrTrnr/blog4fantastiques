const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	
    "auteur": string,
    "titre": string,
    "contenu": string,
    "date": string,
    
});
  /*title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },*/
//});

module.exports = mongoose.model('Article', articleSchema);