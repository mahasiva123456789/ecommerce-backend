const {mongoose}=require('mongoose')
const orderSchema=new mongoose.Schema({
     user_id:{
        type:String,
        required:true
        },
       username:{
        type:String,
        required:true
        },
        useraddress:{
        type:String,
         required:true
         },
        userphoneno:{
        type: String,
        required:true
        } ,
        product_id:String,
        title:String,
        description:String,
        price:Number,
        quantity:Number,
        email_address:String,
        order_Date:String,
        Delivery_date:String

})

const Order=mongoose.model('Order',orderSchema);
module.exports=Order