import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../services/ProductService'

function Products() {
  
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <ProductCard 
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}

        />
      ) )}
    </div>
  )
}

export default Products