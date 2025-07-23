import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
