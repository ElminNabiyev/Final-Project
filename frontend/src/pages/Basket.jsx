import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketProvider'
import "./Basket.scss"
function Basket() {
  const percent = {
    backgroundColor: "rgb(0, 116, 228)",
    padding: " 5px",
    fontSize: " 10px",
    borderRadius: " 5px",

  }
  const { basket, addBasket, removeBasket, decreaseBasket } = useContext(BasketContext)

  function getPercent(y) {
    return (y.price.slice(1) * y.discountPercent.slice(1, 3) / 100).toFixed(2)
  }
  function getPrice(x) {
    return x.price.slice(1) - getPercent(x)
  }
  return (
      <div className='all-basket'>
        {basket.map(x =>
          <div className='basket'>
            <img width={400} height={200} src={x.img} alt="" />
            <p>{x.name}</p>
            <div className='prices'>
              <span style={x.discount ? percent:null}>{x.discount && x.discountPercent}</span>
              <span>{x.discount && <span style={{ textDecoration: "line-through", color: "gray" }}>{x.price}</span>}</span>
              <span>${x.discount ? getPrice(x) : x.price.slice(1)}</span>
            </div>
            <div className='count'>
              <button onClick={() => decreaseBasket(x)} className='btns'>-</button>
              <span style={{ padding: "0px 20px" }}>{x.count}</span>
              <button onClick={() => addBasket(x)} className='btns'>+</button>
            </div>
            <button onClick={() => removeBasket(x)} class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
          </div>
        )}
      </div>
  )
}

export default Basket
