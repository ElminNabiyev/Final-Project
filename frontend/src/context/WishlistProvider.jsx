import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

  function addWishlist(item) {
    const index = wishlist.find(x => x._id === item._id)
    !index ? setWishlist([...wishlist, item]) : setWishlist(wishlist.filter(x => x._id !== item._id))
  }

function isExsist(item) {
     return wishlist.some(x => x._id === item._id)
}

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist ,isExsist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider