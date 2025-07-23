import React, { useState } from 'react'



function AddProductForm() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [success, setSuccess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        const newProduct = {
            name,
            price: parseFloat(price),
            image,
            category,
        }

        fetch("https://mama-mboga-2.onrender.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Product added:", data)
                setSuccess(true)

                setName("")
                setPrice("")
                setImage("")
                setCategory("")
                setTimeout(() => setSuccess(false), 3000)
            })
            .catch((err) => console.error("Error:", err))

    }
  return (
    <div className='add-product-form'>
        <h2>Add New Grocery Item</h2>
        {success && <p style={{color: "green"}}>Product added successfully!</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Price (KES):</label>
                <input 
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Image URL:</label>
                <input 
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Category:</label>
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                >
                <option value="">--Select Category--</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Cereals">Cereals</option>
                <option value="Dairy">Dairy</option>
                <option value="Tubers">Tubers</option>
                <option value="Herbs">Herbs</option>
                </select>
            </div>

            <button type='submit'>Add Product</button>
        </form>
      
    </div>
  )
}


export default AddProductForm

