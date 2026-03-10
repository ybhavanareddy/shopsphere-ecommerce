import React from 'react'
import { useState } from 'react'

import ProductCard from '../components/ProductCard'
import { products } from '../services/ProductService'

function Products() {
  const [search,setSearch] = useState("");

  const filteredProducts = products.filter((product)=> 
  product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-6'>
        Products
      </h1>

      <input 
        type ="text"
        placeholder='Search products...'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className='border p-2 mb-6 w-full'
      />

      <div className='grid grid-cols-3 gap-6'>
          {filteredProducts.map(product => (
          <ProductCard 
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}

          />
          ))}
      </div>
      
    </div>
  )
}

export default Products