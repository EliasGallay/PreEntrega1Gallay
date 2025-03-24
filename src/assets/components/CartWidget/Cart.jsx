import React from 'react'
import { useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState(0)
  return (
    <div onClick={ () => setCart(cart + 1)}>
       <>🛒</>
       <span>{cart}</span>
    </div>
  )
}

export default Cart
