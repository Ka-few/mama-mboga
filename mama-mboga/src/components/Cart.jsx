import React from 'react'

function Cart({cart, removeFromCart}) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className='cart'>
        <h2>Cart</h2>
        {cart.length ===0 ? (
            <p>No items in cart!</p>
        ) : (
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} - KES  {item.price * item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        )}
        <h3>Total: KES {total}</h3>
      
    </div>
  )
}

export default Cart
