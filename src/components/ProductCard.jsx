import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title}/>

      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="category">
          {product.category}
        </p>
        <p className="price">
          ${product.price}
        </p>
        <p>
          {product.rating.rate}
        </p>

        <Link to={`/products/${product.id}`} className='view-button'>View Details</Link>
      </div>


    </div>
  )
}

export default ProductCard