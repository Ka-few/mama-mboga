import React from 'react'

function Cart({cart, removeFromCart}) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className='cart'>
        <h2>Cart</h2>
        {cart.length ===0 ? (
            <p>No items in cart!</p>
        ) : (
            <ul className='cart-list'>
                {cart.map((item) => (
                    <li key={item.id} className='cart-item'>
                        <img src={item.image} alt={item.name} width="150" height="150"/>
                        <div className='cart-details'>
                            <h3>{item.name}</h3>
                            <p>Price: KES {item.price * item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                        
                    </li>
                ))}
            </ul>
        )}
        {cart.length > 0 && (
            <div className='cart-total'>

                <h3>Total Price: KES {total}</h3>
            </div>
        )}
      
    </div>
  )
}

export default Cart
