import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchModal from "./components/SearchModal"
import ProfileModal from "./components/ProfileModal"
import CartSidebar from "./components/CartSidebar"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import MenPage from "./pages/MenPage"
import WomenPage from "./pages/WomenPage"
import CosmeticsPage from "./pages/CosmeticsPage"

function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false)

  const openSearchModal = () => setIsSearchModalOpen(true)
  const closeSearchModal = () => setIsSearchModalOpen(false)

  const openProfileModal = () => setIsProfileModalOpen(true)
  const closeProfileModal = () => setIsProfileModalOpen(false)

  const openCartSidebar = () => setIsCartSidebarOpen(true)
  const closeCartSidebar = () => setIsCartSidebarOpen(false)

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header
            openSearchModal={openSearchModal}
            openProfileModal={openProfileModal}
            openCartSidebar={openCartSidebar}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/cosmetics" element={<CosmeticsPage />} />
          </Routes>
          <Footer />
          <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
          <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
          <CartSidebar isOpen={isCartSidebarOpen} onClose={closeCartSidebar} />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App

