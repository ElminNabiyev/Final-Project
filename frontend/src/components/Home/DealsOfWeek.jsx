import React, { useContext, useEffect, useState } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LangContext } from '../../context/LangProvider';
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


    async function getDatas() {
        const data = await getAll()
        setDatas(data)
    }

    useEffect(() => {
        getDatas()
    }, [])
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <section>
                <div className="general-div">
                    {datas.filter(x => x.dealsOfWeek === true).map(x =>
                        <div className="week-card">
                            <div className='gamePhoto'>
                                <img style={{ width: "100%", height: "200px" }} src={x.img} alt="Game Photo" />
                                <div className="overlay"><span><i className="fa-regular fa-heart"></i></span></div>
                                <p><FormattedMessage id='deals'></FormattedMessage></p>
                            </div>
                            <h3>{x.name}</h3>
                            <div className='names'>
                                <span style={x.discount && percent} className='percent'>{x.discount && x.discountPercent}</span>
                                <span style={x.discount && price} className='price'>{x.price}</span>
                                <span>{x.discount && x.discountedPrice}</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </IntlProvider>
    )
}

export default DealsOfWeek
