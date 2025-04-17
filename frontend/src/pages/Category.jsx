import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Category = () => {
  const [products, setProducts] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    fetch(`${import.meta.env.REACT_APP_API_URL}/api/category/${slug}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error))
  }, [slug])

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">{slug.charAt(0).toUpperCase() + slug.slice(1)} Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Category

