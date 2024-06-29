import React, { useContext, useEffect, useState } from 'react'
import "./DiscountSection.scss"
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LangContext } from '../../context/LangProvider';
import { getAll } from '../../service/service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Card2 from './Card2';

function DiscountSection() {
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
                        <>
                            <SwiperSlide>
                                <Card2 img={x.img} name={x.name} discount={x.discount} price={x.price} discountPrice={x.discountedPrice}discountPercent={x.discountPercent}></Card2>
                            </SwiperSlide>
                        </>
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
                                <Card2 img={x.img} name={x.name} discount={x.discount} price={x.price} discountPrice={x.discountedPrice}discountPercent={x.discountPercent}></Card2>
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>
            </section>
        </IntlProvider>
    )
}

export default DiscountSection
