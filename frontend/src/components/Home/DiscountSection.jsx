import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LangContext } from '../../context/LangProvider';
import { getAll } from '../../service/service';
import "./DiscountSection.scss";
// Import Swiper styles
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { WishlistContext } from '../../context/WishlistProvider';

function DiscountSection() {
    const { messages, locale } = useContext(LangContext)
    const [datas, setDatas] = useState([])
    const { wishlist, addWishlist, isExsist } = useContext(WishlistContext)

    const percent = {
        backgroundColor: "rgb(0, 116, 228)",
        padding: " 5px",
        fontSize: " 10px",
        borderRadius: " 5px",

    }
    const navigate = useNavigate()
    const price = {
        color: "gray",
        textDecoration: "line-through",
        fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)"
    }
    function getPercent(y) {
        return (y.price.slice(1) * y.discountPercent.slice(1, 3) / 100).toFixed(2)
    }
    function getPrice(x) {
        return x.price.slice(1) - getPercent(x)
    }
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
                <div className='writes'>
                    <h2><FormattedMessage id='discount'></FormattedMessage> </h2>
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text"><FormattedMessage id='learn'></FormattedMessage></span>
                    </button>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {datas.filter(x => x.discount === true).map(x =>
                        <SwiperSlide>
                            <div className='games'>
                                <div className='gamePhoto'>
                                    <img src={x.img} alt="Game Photo" />
                                    <div className="overlay"><span onClick={()=>addWishlist(x)}>{isExsist(x)?<i class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>}</span></div>
                                </div>
                                <h3>{x.name}</h3>
                                <div className='names'>
                                    <span style={x.discount ? percent : null} className='percent'>{x.discount && x.discountPercent}</span>
                                    <span style={x.discount ? price : null} className='price'>{x.price}</span>
                                    <span style={{ fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)" }}>{x.discount && `$${getPrice(x)}`}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='writes'>
                    <h2><FormattedMessage id='sellers'></FormattedMessage> </h2>
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text"><FormattedMessage id='learn'></FormattedMessage></span>
                    </button>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {datas.filter(x => x.topSellers === true).map(x =>
                        <>
                            <SwiperSlide>
                                <div className='games'>
                                    <div className='gamePhoto'>
                                        <img src={x.img} alt="Game Photo" />
                                        <div className="overlay">{isExsist(x)?<i class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>}</div>
                                    </div>
                                    <h3>{x.name}</h3>
                                    <div className='names'>
                                        <span style={x.discount ? percent : null} className='percent'>{x.discount && x.discountPercent}</span>
                                        <span style={x.discount ? price : null} className='price'>{x.price}</span>
                                        <span style={{ fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)" }}>{x.discount && `$${getPrice(x)}`}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>
            </section>
        </IntlProvider>
    )
}

export default DiscountSection
