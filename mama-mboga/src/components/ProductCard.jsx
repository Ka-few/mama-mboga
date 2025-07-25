import React, { useState } from 'react'

function ProductCard({product, addToCart}) {
    const [isEditing, setIsEditing] = useState(false)
    const [updatedName, setUpdatedName] = useState(product.name)
    const [updatedPrice, setUpdatedPrice] = useState(product.price)
    const [updatedImage, setUpdatedImage] = useState(product.image)
    const [updatedCategory, setUpdatedCategory] = useState(product.category)

    function handleDelete() {

        fetch(`https://mama-mboga-2.onrender.com/products/${product.id}`, {

            method: "DELETE",
            })
            .then(() => {
                alert("Product deleted!")
                window.location.reload()
            })
            .catch((err) => console.error("Error deleting product:", err))
    }

    function handleUpdate(e) {
        e.preventDefault()
        const updatedProduct = {
            name: updatedName,
            price: updatedPrice,
            image: updatedImage,
            category: updatedCategory,
        }


        fetch(`https://mama-mboga-2.onrender.com/products/${product.id}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
        .then((res) => res.json())
        .then(() => {
            alert("Product updated!")
            setIsEditing(false)
            window.location.reload()
        })
        .catch((err) => console.error("Error updating product:", err))
    }
  return (
    <div className='product-card'>
      
        {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="number"
            step="0.01"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
            placeholder="Price"
          />
          <input
            type="text"
            value={updatedImage}
            onChange={(e) => setUpdatedImage(e.target.value)}
            placeholder="Image URL"
          />
          <select
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
          >
            <option value="">-- Select Category --</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Cereals">Cereals</option>
            <option value="Dairy">Dairy</option>
            <option value="Tubers">Tubers</option>
            <option value="Herbs">Herbs</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
        <img 
        src= {product.image}
        alt={product.name}
        width="150"
        height="150" 
        />
        <h3>{product.name}</h3>
        <p>KES {product.price}</p>
        <p><strong>Category:</strong>{product.category}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => setIsEditing(true)}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        </>
      )}
      
    </div>
  )
}

export default ProductCard

