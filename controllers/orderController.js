const Order=require('../models/orderModel');
const User=require('../models/userModel');
const Cart=require('../models/cartModel');
const Product=require('../models/productModel');


exports.createOrder=async(req,res)=>{
    const {user_id}=req.user;
    const {username,useraddress,userphoneno}=req.body;
    const today = new Date();
    console.log(today);
    const orderDate=today.toLocaleDateString();
    const delivery=today;
    delivery.setDate(today.getDate() + 10);
    const Deliverydate=delivery.toDateString();
 
    try{
        // getting email through id
        let user=await User.findOne({ _id: user_id });
        if(!user){
            return res.status(400).json({message:'login immediately'})
        }
        const email=user.email;
      
        // getting the product details 
        let cart=await Cart.findOne({user_id });
        if(!cart)
        {
            return res.status(401).json({message:'cart is not found for the user'})
        }
        cart.products.map(async (product)=>{
        const productDetails=await Product.findOne({id:product.product_id});

           const order= new Order({
            user_id,
            username,
            useraddress,
            userphoneno,
            product_id:product.product_id,
            title:productDetails.title,
            description:productDetails.description,
            price:productDetails.price,
            quantity:product.quantity,
            email_address:email,
            order_Date:orderDate,
            Delivery_date:Deliverydate
        })
        await order.save();
        res.status(201).json({message:"Order created successfully"});
        await Cart.deleteOne({user_id});
        console.log("Order done sucessfully");
        
    });
} 

    catch(err){
       console.log(err);
        res.status(400).json({message:"Error creating order"});
    }
}

exports.getOrder=async(req,res)=>{
    const {user_id}=req.user;
    try{
        const orders=await Order.find({user_id});
        res.status(200).json(orders);
        }
        catch(err){
            console.log(err);
            res.status(400).json({message:"Error fetching orders"});
            }
}