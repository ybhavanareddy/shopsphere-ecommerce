import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        thumbnail:{
            type:String
        },
        rating:{
            type:Number,
            default:0
        },
        category:{
            type:String,
            default:"general"
        },
        description:{
            type:String,
            default:""
        }
    },
    {
    timestamps:true
    }
);

const Product = mongoose.model("Product",productSchema);
export default Product;