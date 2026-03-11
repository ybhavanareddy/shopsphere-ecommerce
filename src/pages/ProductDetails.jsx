
import { useParams } from 'react-router-dom'
import { products } from '../services/ProductService';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductDetails() {

    const {addToCart} = useContext(CartContext);

    const { id } = useParams();

    const product = products.find(
      (item) => item.id === Number(id)
    );

  return (
    <div className='p-8 max-w-xl mx-auto'>

        <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>

        <p className='text-gray-600 mb-4'>Price: ${product.price.toFixed(2)}</p>

        <button 
          onClick={()=> addToCart(product)}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Add to Cart
        </button>
    </div>
  )
}

export default ProductDetails