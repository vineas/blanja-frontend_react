import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from '@mui/material';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';
const img1 = require('../img/category/accessories.png')
const img2 = require('../img/category/bag.png')
const img3 = require('../img/category/cap.png')
const img4 = require('../img/category/dress.png')
const img5 = require('../img/category/formal-suit.png')
const img6 = require('../img/category/glass.png')
const img7 = require('../img/category/handbag.png')
const img8 = require('../img/category/heels.png')
const img9 = require('../img/category/jacket.png')
const img10 = require('../img/category/pants.png')
const img11 = require('../img/category/shoes.png')
const img12 = require('../img/category/shorts.png')
const img13 = require('../img/category/socks.png')
const img14 = require('../img/category/t-shirt.png')
const img15 = require('../img/category/tie.png')
const img16 = require('../img/category/watch.png')
const Category = () => {
  let [category, setCategory] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // dispatch()
    axios.get(`${process.env.REACT_APP_API_KEY}/category`)
      .then((res) => {
        setCategory(res.data.data);
        setIsLoading(false);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      {isLoading ? (
        <div className='container'>
        <div className="row" style={{display: 'flex', justifyContent: 'center' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className='col-md-2' style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
              <div  style={{ width: 220, height: 206, display: 'flex', alignSelf: 'center' }}>
                <Skeleton height={'130%'} width={'230%'} />
              </div>
            </div>
          ))}
        </div>
        </div>
      ) : (
        <div className="container" style={{ marginTop: 80 }}>
          <Swiper
            // slidesPerView={5}
            breakpoints={{
              0: {
                // width: 576,
                slidesPerView: 2,
                spaceBetween: 10
              },
              480: {
                // width: 576,
                slidesPerView: 3,
                spaceBetween: 10
              },
              768: {
                // width: 576,
                slidesPerView: 4,
                spaceBetween: 15
              },
              1024: {
                // width: 576,
                slidesPerView: 5,
                spaceBetween: 15
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* ${categoryItem.category_id} */}


            <SwiperSlide><Link to={`/category/1`}><img src={img1} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/2`}><img src={img2} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/3`}><img src={img3} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/4`}><img src={img4} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/5`}><img src={img5} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/6`}><img src={img6} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/7`}><img src={img7} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/8`}><img src={img8} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/9`}><img src={img9} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/10`}><img src={img10} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/11`}><img src={img11} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/12`}><img src={img12} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/13`}><img src={img13} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/14`}><img src={img14} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/15`}><img src={img15} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={`/category/16`}><img src={img16} alt="" /></Link></SwiperSlide>

          </Swiper>
        </div>
      )}
    </>
  );
}

export default Category