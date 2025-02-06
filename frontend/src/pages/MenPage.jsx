import React, { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import HeroSlider from "../components/HeroSlider"
import { Link } from "react-router-dom"

const MenPage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [trendingProducts, setTrendingProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = {
          featured: [
            {
              id: 1,
              name: "Classic Oxford Shirt",
              category: "Clothing",
              price: 89,
              image: "https://source.unsplash.com/800x1000/?oxford-shirt",
            },
            {
              id: 2,
              name: "Leather Derby Shoes",
              category: "Footwear",
              price: 199,
              image: "https://source.unsplash.com/800x1000/?leather-shoes",
            },
            {
              id: 3,
              name: "Slim Fit Chinos",
              category: "Clothing",
              price: 79,
              image: "https://source.unsplash.com/800x1000/?chinos",
            },
            {
              id: 4,
              name: "Aviator Sunglasses",
              category: "Accessories",
              price: 129,
              image: "https://source.unsplash.com/800x1000/?sunglasses",
            },
          ],
          trending: [
            {
              id: 5,
              name: "Cashmere Sweater",
              category: "Clothing",
              price: 249,
              image: "https://source.unsplash.com/800x1000/?cashmere-sweater",
            },
            {
              id: 6,
              name: "Leather Weekender Bag",
              category: "Accessories",
              price: 299,
              image: "https://source.unsplash.com/800x1000/?leather-bag",
            },
            {
              id: 7,
              name: "Silk Tie",
              category: "Accessories",
              price: 69,
              image: "https://source.unsplash.com/800x1000/?silk-tie",
            },
            {
              id: 8,
              name: "Wool Overcoat",
              category: "Clothing",
              price: 399,
              image: "https://source.unsplash.com/800x1000/?wool-coat",
            },
          ],
        }
        setFeaturedProducts(data.featured)
        setTrendingProducts(data.trending)
        setLoading(false)
      } catch (error) {
        setError("Failed to fetch products")
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  
  const slides = [
    {
      image: "https://source.unsplash.com/1600x900/?mens-fashion",
      title: "Men's Spring Collection 2024",
      description: "Discover the latest trends in men's fashion",
    },
    {
      image: "https://source.unsplash.com/1600x900/?mens-suits",
      title: "Luxury Suits",
      description: "Timeless elegance for the modern gentleman",
    },
    {
      image: "https://source.unsplash.com/1600x900/?mens-accessories",
      title: "Accessories Edit",
      description: "Complete your look with our curated accessories",
    },
  ]

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <main className="pt-16">
        <HeroSlider slides={slides} />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Featured Men's Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Men's Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/category/clothing" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://source.unsplash.com/800x1000/?mens-clothing"
                    alt="Men's Clothing"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-2xl font-serif mb-2">Clothing</h3>
                      <span className="text-white text-sm">Explore Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/category/shoes" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://source.unsplash.com/800x1000/?mens-shoes"
                    alt="Men's Shoes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-2xl font-serif mb-2">Shoes</h3>
                      <span className="text-white text-sm">Explore Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/category/accessories" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://source.unsplash.com/800x1000/?mens-accessories"
                    alt="Men's Accessories"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-2xl font-serif mb-2">Accessories</h3>
                      <span className="text-white text-sm">Explore Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Trending in Men's Fashion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default MenPage

