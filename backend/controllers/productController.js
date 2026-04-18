//Get all products 

export const getProducts = (req,res)=> {

     const products = [
        {
            id:1,
            title:"iPhone 15",
            price:79999,
            thumbnail:"https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg",
            rating:4.5
        },
        {
            id:2,
            title:"Samsung Galaxy S23",
            price:69999,
            thumbnail:"https://m.media-amazon.com/images/I/91w+qj8n9sL._SL1500_.jpg",
            rating:4.3
        },
        {
            id:3,
            title:"Google Pixel 7",
            price:59999,
            thumbnail:"https://m.media-amazon.com/images/I/71w+qj8n9sL._SL1500_.jpg",
            rating:4.2
        }
    ];
    res.json(products);
};

export const getProductsById = (req,res)=> {

    const products = [
        {
            id:1,
            title:"iPhone 15",
            price:79999,
            thumbnail:"https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg",
            rating:4.5
        },
        {
            id:2,
            title:"Samsung Galaxy S23",
            price:69999,
            thumbnail:"https://m.media-amazon.com/images/I/91w+qj8n9sL._SL1500_.jpg",
            rating:4.3
        },
        {
            id:3,
            title:"Google Pixel 7",
            price:59999,
            thumbnail:"https://m.media-amazon.com/images/I/71w+qj8n9sL._SL1500_.jpg",
            rating:4.2
        }
    ];

    const productId = parseInt(req.params.id);
    const product = products.find((item) => item.id === productId);

    if(!product){
        return res.status(404).json({message:"Product not found"});
    }

    res.json(product);
};