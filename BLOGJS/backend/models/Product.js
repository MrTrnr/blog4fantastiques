const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	
    "ref": string,
    "art": string,
    "cont": string,
    
});
  /*title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },*/
//});

module.exports = mongoose.model('Product', productSchema);