import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CartSidebar from "./CartSidebar"
import ProfileModal from "./ProfileModal"
import SearchModal from "./SearchModal"

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const openProfileModal = () => setIsProfileModalOpen(true)
  const closeProfileModal = () => setIsProfileModalOpen(false)
  const openSearchModal = () => setIsSearchModalOpen(true)
  const closeSearchModal = () => setIsSearchModalOpen(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header openCart={openCart} openProfileModal={openProfileModal} openSearchModal={openSearchModal} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </div>
  )
}

export default Layout

