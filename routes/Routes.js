const productController=require('../controllers/productController')
const  userController=require('../controllers/userController')
const cartcontroller=require("../controllers/cartController")
const orderController=require("../controllers/orderController")
const express=require('express')
const auth =require('../middlewares/auth')
const router=express.Router();

// products
router.get('/products',productController.getProducts)
router.post('/products',productController.createProducts)
router.delete('/products/:id',productController.deleteProducts)
router.put('/products/:id',productController.updateProducts)

// user routers
router.post('/users',userController.createuser)
router.get('/users',userController.login)

//cart routers
router.post('/carts/createcart',auth,cartcontroller.createCart)
router.get('/carts/getcart',auth,cartcontroller.getCart)
router.delete('/carts/:id',auth,cartcontroller.deleteProduct)
module.exports=router

// orders routers
router.post('/orders',auth,orderController.createOrder)
router.get('/orders',auth,orderController.getOrder)