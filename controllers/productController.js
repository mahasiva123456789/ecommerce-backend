const { json } = require('express');
const Product=require('../models/productModel')
const { v4: uuidv4 } = require('uuid');

exports.getProducts=async(req,res)=>{
   
    try{
        const products=await Product.find();
        res.send(products);
    }
    catch(err){
        console.log(err);
    }
}

exports.createProducts = async (req, res) => {
    const { title,description,price,mrp,offerPercentage,category,rating,image,brand,colour,material,
        productDimensions, size, backStyle,specialFeature,productCareInstructions,netQuantity,
        seatMaterialType} = req.body;

    const product = new Product({
        id: uuidv4(),
        title,
        description,
        price,
        mrp,
        offerPercentage,
        category,
        rating,
        image,
        brand,
        colour,
        material,
        productDimensions,
        size,
        backStyle,
        specialFeature,
        productCareInstructions,
        netQuantity,
        seatMaterialType
    });

    try {
        await product.save();
        res.status(200).json("Product created successfully");
    } catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
};

exports.deleteProducts=async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteproduct=await Product.findByIdAndDelete(id)
        if(!deleteproduct)
        {
            return res.status(404).json( "Product not found" );
        }
        res.status(200).json("Product deleted successfully" );
    }
    catch(err)
    {
        console.log(err);
    }}

    

    exports.updateProducts=async(req,res)=>{
        const{id}=req.params;
        const updateproduct=req.body;
        try{
            const updatedproduct=await Product.findByIdAndUpdate(id,updateproduct)
            res.status(200).json({message:"updated successfully", product:updatedproduct});
        }
        catch(err)
        {
            console.log(err);
        }}

  