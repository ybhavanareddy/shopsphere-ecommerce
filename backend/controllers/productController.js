import Product from "../models/Product.js";

//Get all products 

export const getProducts = async(req,res)=> {

     try {
         const products = await Product.find();
         res.json(products);

     } catch (error) {
         res.status(500).json({message: error.message});
     }
};

//Get single product by ID
export const getProductsById = async(req,res)=> {

    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
    
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }

    res.json(product);

    } catch (error) {
    res.status(500).json({message: error.message});
    }
};

//Add new Product 

export const createProduct = async(req,res)=>{
    try{
        const {title,price,thumbnail,rating} = req.body;
        //Basic Validation 
        if(!title || !price){
                return res.status(400).json({
                message:"Title and price are required"
            });
        }

        const product = new Product({
            title,
            price,
            thumbnail,
            rating
         });
        
        
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
       
};

//update produuct 

export const updateProduct = async(req,res)=>{

    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        const {title,price,thumbnail,rating} = req.body;

        if(title) product.title = title;
        if(price) product.price = price;
        if(thumbnail) product.thumbnail = thumbnail;
        if(rating) product.rating = rating;

        const updatedProduct = await product.save();
        res.json(updatedProduct);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
 
};

//Delete product 

export const deleteProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }

        await product.deleteOne();

        res.json({
            message:"Product deleted successfully",
            product
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};