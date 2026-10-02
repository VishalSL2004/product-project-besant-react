import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/products")
  }


  return (
    <div className='home'>
      <h1>Welcome to Product Store</h1>
      <p>Explore our collection of products.</p>
      <button onClick={handleExplore}>
        Explore Products
      </button>
    </div>
  )
}

export default Home