import React, { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import HeroSlider from "../components/HeroSlider"
import { Link } from "react-router-dom"

const CosmeticsPage = () => {
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
              id: 13,
              name: "YSL- rouge pur couture lipstick",
              category: "Makeup",
              price: 35,
              image:
                "https://www.godwell.com.hk/api/image/t512/985717839987eb066a219521583862fdabb31cf53038677489d361bc88aebe15.jpg",
            },
            {
              id: 14,
              name: "Dior- Anti-Aging Serum",
              category: "Skincare",
              price: 89,
              image:
                "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw20ccc52b/images/beauty/03-SKINCARE/2024/PRESTIGE-LES-NECTARS-DE-ROSE/PST_Nectar_Mood_Gamme-Nectar-Baume-Minuit-Rose_2400x3000.jpg",
            },
            {
              id: 15,
              name: "Prada Candy",
              category: "Fragrance",
              price: 120,
              image: "https://i.pinimg.com/originals/d2/b8/c2/d2b8c254113eae421fbbc977d00e40c3.jpg",
            },
            {
              id: 16,
              name: "YSL-Eyeshadow Palette",
              category: "Makeup",
              price: 55,
              image: "https://images-static.nykaa.com/media/catalog/product/3/a/3a186b83614273921725-8.jpg?tr=w-500",
            },
          ],
          trending: [
            {
              id: 17,
              name: "Chanel-Hydra Beauty, Hydrating Face Mask",
              category: "Skincare",
              price: 45,
              image: "https://i.ebayimg.com/images/g/XisAAOSwY9Fl34H-/s-l1200.jpg",
            },
            {
              id: 18,
              name: "Rare beauty- Volumizing Mascara",
              category: "Makeup",
              price: 28,
              image: "https://pbs.twimg.com/media/GGt4I84WUAIvL2U.jpg:large",
            },
            {
              id: 19,
              name: "GUCCI- Unisex Cologne",
              category: "Fragrance",
              price: 85,
              image:
                "https://www.perfumenetwork.in/cdn/shop/files/15Untitleddesign_b0c9776a-47d7-430e-aabc-d97b2e29d67d_1024x1024.png?v=1691906013",
            },
            {
              id: 20,
              name: "Dior Sauvage- Brightening Toner",
              category: "Skincare",
              price: 32,
              image:
                "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwa664fc24/Y0997148/Y0997148_C099700673_E05_GHC.jpg?sw=800",
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
      image: "https://media6.ppl-media.com/mediafiles/blogs/Final_Cover_2ec9abe2c1.png",
      title: "Luxury Cosmetics Collection",
      description: "Discover our premium beauty products",
    },
    {
      image: "https://mademoiselleolantern.com/wp-content/uploads/2020/09/rare-beauty-review-2-1440x1920.jpg",
      title: "Advanced Skincare",
      description: "Reveal your natural radiance",
    },
    {
      image:
        "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwdc788ebb/images/beauty/01-FRAGRANCES/2024/RENO_MISSDIOR/MD_Parfum_Instit_NP_3000x3000.jpg",
      title: "Signature Fragrances",
      description: "Find your perfect scent",
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
            <h2 className="text-3xl font-serif text-center mb-12">Featured Cosmetics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Cosmetics Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/category/makeup" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://i.pinimg.com/originals/d3/c6/24/d3c624a0fad06887f8b0d7d10dd24069.jpg"
                    alt="Makeup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-2xl font-serif mb-2">Makeup</h3>
                      <span className="text-white text-sm">Explore Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/category/skincare" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://www.rarebeauty.com/cdn/shop/files/hp-hero-6-large-sp25-ac-post-launch-1-1210x1566_1210x.jpg?v=1733872782"
                    alt="Skincare"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-2xl font-serif mb-2">Skincare</h3>
                      <span className="text-white text-sm">Explore Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/category/fragrance" className="group category-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://www.prada.com/content/dam/pradanux/pradasphere/2021/fragrances/luna_rossa/archive/wall/Wall_landscape_DT.jpg"
                    alt="Fragrance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-2xl font-serif mb-2">Fragrance</h3>
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
            <h2 className="text-3xl font-serif text-center mb-12">Trending in Cosmetics</h2>
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

export default CosmeticsPage

