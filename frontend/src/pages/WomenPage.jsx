import React, { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import HeroSlider from "../components/HeroSlider"
import { Link } from "react-router-dom"

const WomenPage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [trendingProducts, setTrendingProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulating API call with local data
    const fetchData = () => {
      try {
        const data = {
          featured: [
            {
              id: 1,
              name: "Floral Maxi Dress",
              category: "Clothing",
              price: 129,
              image: "https://source.unsplash.com/800x1000/?floral-dress",
            },
            {
              id: 2,
              name: "Leather Tote Bag",
              category: "Accessories",
              price: 199,
              image: "https://source.unsplash.com/800x1000/?leather-bag",
            },
            {
              id: 3,
              name: "High-Waisted Jeans",
              category: "Clothing",
              price: 89,
              image: "https://source.unsplash.com/800x1000/?jeans",
            },
            {
              id: 4,
              name: "Statement Earrings",
              category: "Accessories",
              price: 49,
              image: "https://source.unsplash.com/800x1000/?earrings",
            },
          ],
          trending: [
            {
              id: 5,
              name: "Silk Blouse",
              category: "Clothing",
              price: 99,
              image: "https://source.unsplash.com/800x1000/?silk-blouse",
            },
            {
              id: 6,
              name: "Strappy Sandals",
              category: "Footwear",
              price: 79,
              image: "https://source.unsplash.com/800x1000/?sandals",
            },
            {
              id: 7,
              name: "Oversized Sunglasses",
              category: "Accessories",
              price: 59,
              image: "https://source.unsplash.com/800x1000/?sunglasses",
            },
            {
              id: 8,
              name: "Wrap Skirt",
              category: "Clothing",
              price: 69,
              image: "https://source.unsplash.com/800x1000/?skirt",
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
      image: "https://source.unsplash.com/1600x900/?womens-fashion",
      title: "Women's Spring Collection 2024",
      description: "Discover the latest trends in women's fashion",
    },
    {
      image: "https://source.unsplash.com/1600x900/?womens-dresses",
      title: "Elegant Dresses",
      description: "Find the perfect dress for any occasion",
    },
    {
      image: "https://source.unsplash.com/1600x900/?womens-accessories",
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
            <h2 className="text-3xl font-serif text-center mb-12">Featured Women's Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Women's Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/category/clothing" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://source.unsplash.com/800x1000/?womens-clothing"
                    alt="Women's Clothing"
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
                    src="https://source.unsplash.com/800x1000/?womens-shoes"
                    alt="Women's Shoes"
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
                    src="https://source.unsplash.com/800x1000/?womens-accessories"
                    alt="Women's Accessories"
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
            <h2 className="text-3xl font-serif text-center mb-12">Trending in Women's Fashion</h2>
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

export default WomenPage
