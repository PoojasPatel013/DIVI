import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [trendingProducts, setTrendingProducts] = useState([])

  const slides = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/3492/1742/files/top_italian_luxury_brands_max_mara.jpg?v=1692085054",
      title: "Spring Collection 2024",
      description: "Discover the latest trends",
    },
    {
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F10%2Fdior-beauty-makeup-skincare-parfums-holiday-2021-collection-0.jpg?fit=max&cbr=1&q=90&w=750&h=500",
      title: "Luxury Essentials",
      description: "Timeless pieces for your wardrobe",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/rare-beauty-review-661cef36e8181.jpg?crop=0.497xw:0.987xh;0.503xw,0&resize=640:*",
      title: "Beauty Edit",
      description: "Explore our cosmetics collection",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("${import.meta.env.REACT_APP_API_URL}/api/products")
        const data = await response.json()
        setFeaturedProducts(data.slice(0, 4))
        setTrendingProducts(data.slice(4, 8))
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <main className="pt-16">
      <section id="heroSlider" className="relative mb-12 h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div className="max-w-xl mx-auto px-4">
                <h2 className="text-5xl font-serif mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                <button className="bg-white text-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/men" className="group category-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://www.thefashionisto.com/wp-content/uploads/2023/07/Ralph-Lauren-Spring-Summer-2023-Men-004.jpg"
                  alt="Men's Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white text-2xl font-serif mb-2">Men's Collection</h3>
                    <span className="text-white text-sm">Explore Now →</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/women" className="group category-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://media.allure.com/photos/6127ac0b238beb835812ce4c/1:1/w_2250,h_2250,c_limit/Ariana%20Grande%20Allure%20Cover%20No%20Coverlines.jpg"
                  alt="Women's Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white text-2xl font-serif mb-2">Women's Collection</h3>
                    <span className="text-white text-sm">Explore Now →</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/cosmetics" className="group category-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://lavenderoom.com/wp-content/uploads/2023/06/rare-beauty-launches-in-india-here-are-their-bestsellers-001.jpg"
                  alt="Cosmetics Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white text-2xl font-serif mb-2">Cosmetics</h3>
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
          <h2 className="text-3xl font-serif text-center mb-12">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

