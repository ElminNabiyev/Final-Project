import React, { useEffect, useState } from 'react'
import { getAll } from '../../service/service';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Card from './Card';

function SliderSection() {
    const [datas, setDatas] = useState([])

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
                    <>
                        <SwiperSlide><Card id={x._id} img={x.img} name={x.name} heading={x.heading}></Card></SwiperSlide>
                    </>
                )}
            </Swiper>
        </section>
    )
}

export default SliderSection
