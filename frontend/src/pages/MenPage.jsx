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
              id: 29,
              name: "Louis Vuitton-Classic Oxford Shirt",
              category: "Clothing",
              price: 89,
              image: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S/67060651_50-99999999_01.jpg?imwidth=2048&imdensity=1&ts=1702980180940",
            },
            {
              id: 30,
              name: "Prada Leather Derby Shoes",
              category: "Footwear",
              price: 199,
              image: "https://media.lanecrawford.com/E/E/J/EEJ111_ro_m.jpg",
            },
            {
              id: 31,
              name: "Tommy Hilfiger - Slim Fit Chinos",
              category: "Clothing",
              price: 79,
              image: "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW39496_DW5_main?$b2c_updp_m_mainImage_1920$",
            },
            {
              id: 32,
              name: "Versace - Aviator Sunglasses",
              category: "Accessories",
              price: 129,
              image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw60160628/original/90_O2252-O10028763_ONUL_24_PilotSunglasses--Versace-online-store_1_2.jpg?sw=850&q=85&strip=true",
            },
          ],
          trending: [
            {
              id: 33,
              name: "Gucci - Cashmere Sweater",
              category: "Clothing",
              price: 249,
              image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1698688890/692900_XKCC5_4492_011_100_0000_Light-GG-wool-jacquard-sweater.jpg",
            },
            {
              id: 34,
              name: "Hermes`-Leather Weekender Bag",
              category: "Accessories",
              price: 299,
              image: "https://cdn.theluxurycloset.com/uploads/products/750x750/luxury-men-hermes-used-bags-p158816-0002.jpg",
            },
            {
              id: 35,
              name: "Gucci - Silk Tie",
              category: "Accessories",
              price: 69,
              image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1727769625/816002_4E009_2164_003_100_0000_Light-GG-silk-jacquard-tie.jpg",
            },
            {
              id: 36,
              name: "Louis Vuitton - Wool Overcoat",
              category: "Clothing",
              price: 399,
              image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-double-breasted--tailored-wool-jacket--HRJ02EJFT51A_PM1_Worn%20view.jpg",
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
      image: "https://wwd.com/wp-content/uploads/2024/07/Ralph_Lauren_RTW_SS25_Runway_ARS_0001.jpg?crop=0px%2C624px%2C2037px%2C1143px&resize=1000%2C563",
      title: "Men's Spring Collection 2024",
      description: "Discover the latest trends in men's fashion",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtV4mPvvGk7YQuYHoKpcRmpu0Zjxj-ELW4ZuiedyicJmjnvI5keOilKzg0JD_1l4ZnE64&usqp=CAU",
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

