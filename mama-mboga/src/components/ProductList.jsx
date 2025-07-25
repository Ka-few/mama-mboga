import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductList({addToCart}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://mama-mboga-2.onrender.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err))
    }, [])
  return (
    <div className='product-list'>
        
        <h2 className='section-title'>Available Groceries</h2>
        <div className='products-grid'>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard 
                    key={product.id}
                    product = {product}
                    addToCart={addToCart}
                    />
                ))
            ) : (
                <p>No products found!</p>
            
            )}
        </div>
      
    </div>
  )
}

export default ProductList

