import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getID } from '../service/service';
import "./Detail.scss";
// Import Swiper styles
import { Helmet } from 'react-helmet-async';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BasketContext } from '../context/BasketProvider';
import { WishlistContext } from '../context/WishlistProvider';


function Detail() {
  const { id } = useParams()
  const [datas, setDatas] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState("null");
  const { addWishlist, isExsist } = useContext(WishlistContext)
  const { addBasket } = useContext(BasketContext)

  async function getDatas() {
    const data = await getID(id)
    setDatas(data)
  }
  useEffect(() => {
    getDatas()
  }, [])

  return (
    <>
      <Helmet>
        <title>{`${datas.name}| Download & Play , Mods, & More`}</title>
      </Helmet>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={datas.detailImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={datas.detailImg2} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={datas.detailImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={datas.detailImg2} />
        </SwiperSlide>
      </Swiper>
      <div className="cart-div">
        <div className="btns">
          <button className='cart-btn' onClick={() => addBasket(datas)}>
            Add to Cart
          </button>
          <button className='heart'><span onClick={() => addWishlist(datas)}>{isExsist(datas) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</span></button>
          <p>Refund Type: <span>Self-Refundable</span></p>
          <div className="line"></div>
          <p>Developer: <span>{datas.developer}</span></p>
          <div className="line"></div>
          <p>Publisher: <span>{datas.publisher}</span></p>
          <div className="line"></div>
          <p>Release Date: <span>{datas.releaseDate}</span></p>
          <div className="line"></div>
        </div>
      </div>
      <div className="descriptions">
        <h3>{datas.heading}</h3>
        <h4>{datas.h1}</h4>
        <p>{datas.h1Des}</p>
        <h4>{datas.h2}</h4>
        <p>{datas.h2Des}</p>
        <h4>{datas.h3}</h4>
        <p>{datas.h3Des}</p>
      </div>
      <div className="recommend">
        <div className="min">
          <h4>OS</h4>
          <p>{datas.minSystem !== undefined ? datas.minSystem.OS : null}</p>
          <h4>Processor</h4>
          <p>{datas.minSystem !== undefined ? datas.minSystem.Processor : null}</p>
          <h4>OS</h4>
          <p>{datas.minSystem !== undefined ? datas.minSystem.OS : null}</p>
          <h4>Memory</h4>
          <p>{datas.minSystem !== undefined ? datas.minSystem.Memory : null} GB RAM</p>
          <h4>Graphic Card</h4>
          <p>{datas.minSystem !== undefined ? datas.minSystem.Graphics : null}</p>
          <h4>Storage</h4>
          <p>{datas.minSystem !== undefined ? datas.minSystem.Storage : null} GB available space (SSD recommended)</p>
        </div>
        <div className="rec">
          <h4>OS</h4>
          <p>{datas.recSystem !== undefined ? datas.recSystem.OS : null}</p>
          <h4>Processor</h4>
          <p>{datas.recSystem !== undefined ? datas.recSystem.Processor : null}</p>
          <h4>OS</h4>
          <p>{datas.recSystem !== undefined ? datas.recSystem.OS : null}</p>
          <h4>Memory</h4>
          <p>{datas.recSystem !== undefined ? datas.recSystem.Memory : null} GB RAM</p>
          <h4>Graphic Card</h4>
          <p>{datas.recSystem !== undefined ? datas.recSystem.Graphics : null}</p>
          <h4>Storage</h4>
          <p>{datas.recSystem !== undefined ? datas.recSystem.Storage : null} GB available space (SSD recommended)</p>
        </div>
      </div>
    </>
  )
}

export default Detail
