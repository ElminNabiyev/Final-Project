import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const BasketContext = createContext()

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket",[])

  function addBasket(item) {
    const index = basket.findIndex(x => x._id === item._id)
    const element = basket[index]
    if (index !== -1) {
      element.count++
      setBasket([...basket])
    }
    else {
      setBasket([...basket, { ...item, count: 1 }])
    }
  }

  function removeBasket(item) {
    setBasket(basket.filter(x => x._id !== item._id))
  }

  function decreaseBasket(item) {
    const index = basket.findIndex(x => x._id === item._id)
    const element = basket[index]
    if (element.count > 1) {
      element.count--
      setBasket([...basket])
    }
  }
  return (
    <BasketContext.Provider value={{ basket, addBasket, removeBasket, decreaseBasket }}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider