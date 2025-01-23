import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"

const Product = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id.toString() === id)
        setProduct(foundProduct)
      })
      .catch((error) => console.error("Error:", error))
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.category}</p>
          <p className="mb-6">{product.description}</p>
          <button
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
}

export default Product

