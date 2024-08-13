
const mongoose=require('mongoose')
const productSchema = new mongoose.Schema({
   id: String,
   title: String,
   description: String,
   price: Number,
   mrp: Number, 
   offerPercentage: Number, 
   category: String, 
   image: String,
   rating: {
       rate: Number,
       count: Number
   },
   brand: String,
   colour: String, 
   material: String, 
   productDimensions: String, 
   size: String, 
   backStyle: String, 
   specialFeature: String, 
   productCareInstructions: String, 
   netQuantity: String, 
   seatMaterialType: String 
});
const Product=new mongoose.model('Product',productSchema)
module.exports=Product;