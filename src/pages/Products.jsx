import React, { useEffect, useState } from 'react'

import {getProducts, getProductsById} from '../services/productServices';
import ErrorMessage from '../components/ErrorMessage';
import ProductList from '../components/ProductList';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    const fetchProducts = async () => {
      try{
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      }
      catch(error){
        setError("Failed to fetch products");
      }
      finally{
        setLoading(false);
      }
    }
    fetchProducts();
  },[])

  if(loading){
    return <loading />
  }

  if(error){
    return <ErrorMessage message={error}/>
  }
  return (
    <div className='container'>
      <h1>Products</h1>

      <ProductList products={products}/>
    </div>
  )
}

export default Products