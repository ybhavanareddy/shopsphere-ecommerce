
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function ProductCard({id,title,price,image,rating}) {

  const { addToCart } = useContext(CartContext)

  function handleAdd(){
    const product = {id,title,price,image,rating}
    addToCart(product)
  }

  return (
    <div className='border rounded-lg p-4 shadow hover:shadow-lg transition'>
        <img 
        src={image}
        alt={title}
        className = "h-40 mx-auto object-contain mb-4"
        />
        <h3 className='text-lg font-semibold mb-2'>
          <Link to={`/products/${id}`}>
          {title}
          </Link>
        </h3>

        <p className='text-gray-600 mb-1'>
          Price: {price}
        </p>
        <p className="text-yellow-500 mb-2">
          ⭐ {rating.rate} ({rating.count})
        </p>
        <button 
        onClick={handleAdd}
        className='bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Add to Cart
        </button>
    </div>

  )
}

export default ProductCard