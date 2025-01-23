import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="bg-black text-white px-6 py-3 rounded-lg mt-4">Checkout</button>
            <button className="ml-4 text-gray-600" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart

