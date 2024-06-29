import React, { useContext, useEffect, useState } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LangContext } from '../../context/LangProvider';
import { WishlistContext } from '../../context/WishlistProvider';
import { getAll } from '../../service/service';
import "./DealsOfWeek.scss"
const percent = {
    backgroundColor: "rgb(0, 116, 228)",
    padding: " 5px",
    fontSize: " 10px",
    borderRadius: " 5px",

}

const price = {
    color: "gray",
    textDecoration: "line-through",
}

function DealsOfWeek() {
    const { messages, locale } = useContext(LangContext)
    const [datas, setDatas] = useState([])

    const {wishlist, addWishlist ,isExsist} = useContext(WishlistContext)
    async function getDatas() {
        const data = await getAll()
        setDatas(data)
    }

    useEffect(() => {
        getDatas()
    }, [])

    function getPercent(y) {
        return (y.price.slice(1)*y.discountPercent.slice(1,3)/100).toFixed(2)
    }
    function getPrice(x) {
        return x.price.slice(1)-getPercent(x)
    }
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <section>
                <div className="general-div">
                    {datas.filter(x => x.dealsOfWeek === true).map(x =>
                        <div className="week-card">
                            <div className='gamePhoto'>
                                <img style={{ width: "100%", height: "200px" }} src={x.img} alt="Game Photo" />
                                <div className="overlay"><span onClick={()=>addWishlist(x)}>{isExsist(x)?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</span></div>
                                <p><FormattedMessage id='deals'></FormattedMessage></p>
                            </div>
                            <h3>{x.name}</h3>
                            <div className='names'>
                                <span style={x.discount && percent} className='percent'>{x.discount && x.discountPercent}</span>
                                <span style={x.discount && price} className='price'>{x.price}</span>
                                <span>${x.discount && getPrice(x)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </IntlProvider>
    )
}

export default DealsOfWeek
