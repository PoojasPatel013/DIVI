import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react"
import { CartContext } from "../contexts/CartContext"
import "../styles/header.css"

function Header({ openCartSidebar, openProfileModal, openSearchModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cart } = useContext(CartContext)

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <Link to="/" className="header-logo">
            DIVI`
          </Link>

          <div className="nav-menu">
            <div className="nav-item group">
              <button className="nav-link" aria-expanded="false" aria-haspopup="true">
                <span>Collections</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                <Link to="/men" className="nav-dropdown-link">
                  Men
                </Link>
                <Link to="/women" className="nav-dropdown-link">
                  Women
                </Link>
                <Link to="/category/accessories" className="nav-dropdown-link">
                  Accessories
                </Link>
              </div>
            </div>

            <div className="nav-item group">
              <button className="nav-link" aria-expanded="false" aria-haspopup="true">
                <span>Men</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                <Link to="/men" className="nav-dropdown-link">
                  DIVI`-Men
                </Link>
                <Link to="/category/men-new" className="nav-dropdown-link">
                  New Arrivals
                </Link>
                <Link to="/category/Clothing" className="nav-dropdown-link">
                  Clothing
                </Link>
                <Link to="/category/footwear" className="nav-dropdown-link">
                  Footwear
                </Link>
              </div>
            </div>

            <div className="nav-item group">
              <button className="nav-link" aria-expanded="false" aria-haspopup="true">
                <span>Women</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                <Link to="/women" className="nav-dropdown-link">
                  DIVI` Women
                </Link>
                <Link to="/category/women-new" className="nav-dropdown-link">
                  New Arrivals
                </Link>
                <Link to="/category/Clothing" className="nav-dropdown-link">
                  Clothing
                </Link>
                <Link to="/category/footwear" className="nav-dropdown-link">
                  Shoes
                </Link>
              </div>
            </div>

            <div className="nav-item group">
              <button className="nav-link" aria-expanded="false" aria-haspopup="true">
                <span>Cosmetics</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                <Link to="/cosmetics" className="nav-dropdown-link">
                  DIVI`-BEAUTY
                </Link>
                <Link to="/category/makeup" className="nav-dropdown-link">
                  Makeup
                </Link>
                <Link to="/category/skincare" className="nav-dropdown-link">
                  Skincare
                </Link>
                <Link to="/category/fragrance" className="nav-dropdown-link">
                  Fragrance
                </Link>
              </div>
            </div>
          </div>

          <div className="header-icons">
            <button className="header-icon" onClick={openSearchModal}>
              <Search className="w-5 h-5" />
            </button>
            <button className="header-icon" onClick={openProfileModal}>
              <User className="w-5 h-5" />
            </button>
            <button className="header-icon relative" onClick={openCartSidebar}>
              <ShoppingBag className="w-5 h-5" />
              <span className="cart-count">{cartItemCount}</span>
            </button>
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>


      <div className={`mobile-menu ${isMobileMenuOpen ? "" : "hidden"}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <Link to="/" className="header-logo">
            DIVI`
          </Link>
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="mobile-menu-items">
          <Link to="/category/collections" className="mobile-menu-link">
            Collections
          </Link>
          <Link to="/category/men" className="mobile-menu-link">
            Men
          </Link>
          <Link to="/category/women" className="mobile-menu-link">
            Women
          </Link>
          <Link to="/category/cosmetics" className="mobile-menu-link">
            Cosmetics
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
