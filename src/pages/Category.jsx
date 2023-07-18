import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
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
    return (
        <>
        <div className="container" style={{marginTop:80}}>    
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

            
            <SwiperSlide><Link to={'/catepage'}><img src={img1} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img2} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img3} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img4} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img5} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img6} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img7} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img8} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img9} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img10} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img11} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img12} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img13} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img14} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img15} alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link to={'/catepage'}><img src={img16} alt="" /></Link></SwiperSlide>
          </Swiper>
          </div>
        </>
      );
}

export default Category