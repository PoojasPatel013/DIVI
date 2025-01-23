import React, { useContext } from "react"
import { X } from "lucide-react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router-dom"

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="cart-items space-y-4 flex-grow overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/cart" onClick={onClose} className="block w-full bg-black text-white py-2 mt-4 rounded text-center">
            View Cart
          </Link>
          <button className="w-full bg-green-600 text-white py-2 mt-2 rounded">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar

