import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getAll } from '../../service/service';
import { FormattedMessage, IntlProvider } from 'react-intl';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { LangContext } from '../../context/LangProvider';
import { BasketContext } from '../../context/BasketProvider';
import { useNavigate } from 'react-router-dom';
import "./Card.scss"

function SliderSection() {
    const [datas, setDatas] = useState([])
    const { messages, locale } = useContext(LangContext)
    const { basket, addBasket, removeBasket, decreaseBasket } = useContext(BasketContext)
    const navigate=useNavigate()
    async function getDatas() {
        const data = await getAll()
        setDatas(data)
    }

    useEffect(() => {
        getDatas()
    }, [])

    return (
        <section style={{ padding: "100px 0px" }} className='slider'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {datas.map(x =>
                    <SwiperSlide>
                        <IntlProvider locale={locale} messages={messages[locale]}>
                            <div className='card'>
                                <img onClick={() => navigate(`/${x._id}`)} src={x.img} alt="Game Photo" />
                                <div className="features">
                                    <h1>{x.name}</h1>
                                    <br />
                                    <p className='des'>{x.heading}</p>
                                </div>
                                <button onClick={()=>addBasket(x)} class="CartBtn">
                                    <span class="IconContainer">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                                    </span>
                                    <p class="text"><FormattedMessage id='add'></FormattedMessage></p>
                                </button>
                            </div>
                        </IntlProvider>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default SliderSection
