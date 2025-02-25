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
    
    const fetchData = () => {
      try {
        const data = {
          featured: [
            {
              id: 21,
              name: "Louis Vuitton-Floral Maxi Dress",
              category: "Clothing",
              price: 129,
              image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-floral-print-long-sleeved-tiered-dress--FQDR36GQO001_PM1_Worn%20view.jpg",
            },
            {
              id: 22,
              name: "Prada-Leather Tote Bag",
              category: "Accessories",
              price: 199,
              image: "https://cdn-images.farfetch-contents.com/22/72/85/53/22728553_52708332_1000.jpg",
            },
            {
              id: 23,
              name: "Louis Vuitton- Washed Denim wide leg Jeans",
              category: "Clothing",
              price: 89,
              image: "https://uk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-washed-denim-wide-leg-jeans--FRPT39MML703_PM1_Worn%20view.jpg",
            },
            {
              id: 24,
              name: "Bulgari-Statement Earrings",
              category: "Accessories",
              price: 49,
              image: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwc32d38f3/images/images/worn/425506.png",
            },
          ],
          trending: [
            {
              id: 25,
              name: "Gucci - Silk Shirt",
              category: "Clothing",
              price: 99,
              image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1718123561/752917_ZANRP_2275_007_100_0000_Light-GG-Supreme-print-silk-shirt.jpg",
            },
            {
              id: 26,
              name: "Saint Laurent- Strappy Sandals",
              category: "Footwear",
              price: 79,
              image: "https://media.vogue.in/wp-content/uploads/2018/05/Shoes-Saint-Laurent.jpg",
            },
            {
              id: 27,
              name: "Oversized Sunglasses",
              category: "Accessories",
              price: 59,
              image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbd7d6c36/original/90_O4458-OGB18754_ONUL_24_MedusaDecoButterflySunglasses-Sunglasses-Versace-online-store_1_1.jpg?sw=850&q=85&strip=true",
            },
            {
              id: 28,
              name: "Louis Vuitton - Wrap Skirt",
              category: "Clothing",
              price: 69,
              image: "https://au.louisvuitton.com/images/is/poster-video/ab9e955a-6141-355d-9bb2-f40fb6d3a8c8-1716982995.jpg",
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
      image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--WOMEN_SS25_SHOW_%20KEY_LOOKS_LV-COM_DI3.jpg?wid={IMG_WIDTH}&hei={IMG_HEIGHT}",
      title: "Women's Spring Collection 2024",
      description: "Discover the latest trends in women's fashion",
    },
    {
      image: "https://firstclasse.com.my/wp-content/uploads/2020/11/best-luxury-brands-burberry-luxe-digital.jpg",
      title: "Elegant Dresses",
      description: "Find the perfect dress for any occasion",
    },
    {
      image: "https://cdn.luxatic.com/wp-content/uploads/2021/03/Louis-Vuitton.jpg",
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
                    src="https://i.pinimg.com/236x/4d/68/b8/4d68b8cf71659aeb6e36f1860b39d465.jpg"
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
                    src="https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/1/1/1190911bk01-1190911bk01-hover-ecommerce-christianlouboutin-hotchick-1190911_bk01_2_1200x1200.jpg"
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
                    src="https://www.bulgari.com/on/demandware.static/-/Library-Sites-bulgariSharedLibrary/default/dwc39cc3a5/the_maison/bulgari_history/SLIDER_1/5_410x410.jpg"
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
