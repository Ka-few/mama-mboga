import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'
import Cart from './components/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'


function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id)
      if (itemExists) {
        return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      }else{
        return [...prevCart, {...product, quantity: 1}]
      }
    })
  }
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }
  return (
    <>
    
    <Router>
      <div>
        <NavBar cart={cart} />

        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}


export default App

