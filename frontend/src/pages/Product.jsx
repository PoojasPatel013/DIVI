import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import { Star, StarHalf, Heart } from "lucide-react"

const Product = () => {
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch(`${import.meta.env.REACT_APP_API_URL}/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error))
  }, [id])

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    alert("Product added to cart successfully!")
  }

  if (!product) return <div>Loading...</div>

  return (
    <main className="container mx-auto px-4 py-16 mt-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column - Images */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4">
            <button className="border hover:border-gray-400 rounded-lg overflow-hidden w-20 h-20">
              <img
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} thumbnail`}
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="aspect-square rounded-lg overflow-hidden border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-playfair mb-4">{product.name}</h1>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">MRP: ${(product.price * 1.1).toFixed(2)}</span>
              <span className="text-green-600">10% OFF</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <StarHalf size={16} fill="currentColor" />
              </div>
              <span className="text-sm text-gray-600">(2 Reviews)</span>
            </div>
          </div>

          {/* Category */}
          <div className="space-y-4">
            <h3 className="font-medium">Category</h3>
            <p className="text-gray-600">{product.category}</p>
          </div>

          {/* Quantity */}
          <div className="space-y-4">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                onClick={() => updateQuantity(-1)}
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                onClick={() => updateQuantity(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart and Favorite */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
            <button className="w-14 h-14 flex items-center justify-center border rounded-lg hover:bg-gray-50">
              <Heart className="text-xl" />
            </button>
          </div>

          {/* Product Description */}
          <div className="pt-8 border-t space-y-4">
            <h3 className="font-medium">Product Description</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience luxury with this premium {product.category} item from our curated collection.
              {product.name} represents the pinnacle of craftsmanship and style.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product

