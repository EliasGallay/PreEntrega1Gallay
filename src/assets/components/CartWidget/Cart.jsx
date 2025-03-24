import React from 'react'
import { useState } from 'react'
import './Cart.css'

const Cart = () => {
    const [cart, setCart] = useState(0)
  return (
    <div onClick={ () => setCart(cart + 1)}>
       <span className='cart-icon'>🛒</span>
       <span>{cart}</span>
    </div>
  )
}

export default Cart
