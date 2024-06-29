import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../../context/LangProvider'
import { FormattedMessage, IntlProvider } from 'react-intl';
import { CiGift } from "react-icons/ci";
import "./FreeSection.scss"
import { getAll } from '../../service/service';
function FreeSection() {
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
                <div className="background">
                        <div style={{ display: "flex", justifyContent: "space-between" }} className='btn-and-free'>
                            <div className='free'>
                                <CiGift />
                                <h4><FormattedMessage id='free'></FormattedMessage></h4>
                            </div>
                            <div>
                                <button><FormattedMessage id='learn'></FormattedMessage></button>
                            </div>
                        </div>
                        <div className="games">
                            {datas.filter(x => x.price === "Free").map(x =>
                                <div className='gamePhoto'>
                                    <div className='img'>
                                        <img src={x.img} alt="Game Photo" />
                                        <div className="overlay2"></div>
                                        <p className='overlay-write'><FormattedMessage id='free2'></FormattedMessage></p>
                                    </div>
                                        <h5>{x.name}</h5>
                                        <p className='time'><FormattedMessage id='free2'></FormattedMessage>-July 11 7:00 PM</p>
                                </div>
                            )}
                    </div>
                </div>
            </section>
        </IntlProvider>
    )
}

export default FreeSection
