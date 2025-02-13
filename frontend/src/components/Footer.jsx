import React, { useState } from "react"
import { Link } from "react-router-dom"

function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About DIVI`</h3>
            <p className="text-gray-600">
              DIVI` is a premium fashion and lifestyle brand collection platform, offering curated collections from
              various top-rated brands for the discerning customer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-gray-900">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/men" className="text-gray-600 hover:text-gray-900">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-gray-600 hover:text-gray-900">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-600 hover:text-gray-900">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/cosmetics" className="text-gray-600 hover:text-gray-900">
                  Cosmetics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2025 DIVI`. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

