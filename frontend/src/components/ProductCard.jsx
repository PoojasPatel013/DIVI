import React from "react"
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Add to cart logic will be handled by CartContext
    console.log("Adding to cart:", product)
  }

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Link to={`${import.meta.env.VITE_API_URL}/product/${product.id}`} className="group">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </Link>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-white text-black py-2 opacity-0 transform translate-y-2 
                   group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 uppercase">{product.category}</p>
        <Link to={`${import.meta.env.VITE_API_URL}/product/${product.id}`}>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        </Link>
        <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard

