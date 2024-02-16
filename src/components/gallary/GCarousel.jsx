import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../stylesheet/gal.css';
// import i1 from '../images/gallery/G2k17/IMG_0374.JPG'
import SwiperCore from 'swiper'
import { G2k17 } from '../../json/Gal';
import { G2k18 } from '../../json/Gal';
import { G2k19 } from '../../json/Gal';
import { G2k20 } from '../../json/Gal';
import { G2k21 } from '../../json/Gal';
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
const GCarsol = ({ selectedYear }) => {
  SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);
  let b = G2k17;
  if(selectedYear =='G2k18'){
    b=G2k18;
  }
  if(selectedYear =='G2k19'){
    b=G2k19;
  }
  if(selectedYear =='G2k20'){
    b=G2k20;
  }
  if(selectedYear =='G2k21'){
    b=G2k21;
  }
  return (
    
    <div className="relative w-[180vh] h-[63vh]  bg-black o  rounded-bl-30">
      {
        <div className="top-[800px] left-0 min-h-[55vh] min-w-[50vh]  bg-[#252424]  bg-opacity-0 flex justify-center items-center direction-column flex-col " style={{ width: '30%', height: '70%' }}>
          {/* <div className="bg-white p-6 rounded" style={{ width: '30%', height: '70%' }}> */}

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            // className="mySwiper"
            slidesPerView={'auto'}
            autoplay={{
              delay: 1000, // Set the delay in milliseconds between slides
              disableOnInteraction: false, // Allow interaction to stop autoplay
            }}
            coverflowEffect={{
              rotate: 40,
              stretch: -200,
              depth: 400,
              modifier: 1,
              slideShadows: true,
            }}
            // pagination={{
            //   clickable: true,
            //   bulletClass:`swiper-pagination-bullet`
            // }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwipe"
          >
            {b.map((item)=>
            <SwiperSlide className='card z-[-1000]' key={item.id}>
              <img src={item.src} />
            </SwiperSlide>
            )}
          </Swiper>

        </div>
        // </div>
    }
    </div>
  );
};

export default GCarsol;