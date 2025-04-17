import React, { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Link } from "react-router-dom"

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("")
      setResults([])
      setError(null)
    }
  }, [isOpen])

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/search?query=${encodeURIComponent(searchQuery)}`)
      if (!response.ok) {
        throw new Error("Search failed")
      }
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error("Error searching products:", error)
      setError("An error occurred while searching. Please try again.")
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Search</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for products..."
            className="w-full border p-2 rounded-lg"
          />
          <button onClick={handleSearch} className="bg-black text-white px-4 py-2 rounded-lg" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        <div className="mt-4 max-h-60 overflow-y-auto">
          {error && <p className="text-red-500">{error}</p>}
          {results.length > 0
            ? results.map((product) => (
                <Link to={`${import.meta.env.VITE_API_URL}/product/${product.id}`} key={product.id} className="block" onClick={onClose}>
                  <div className="flex items-center gap-4 mb-4 hover:bg-gray-100 p-2 rounded">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>
                      <p className="font-medium">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))
            : searchQuery.trim() && !loading && <p className="text-gray-600">No results found</p>}
        </div>
      </div>
    </div>
  )
}

export default SearchModal

