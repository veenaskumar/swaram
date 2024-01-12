import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { RxCross2 } from "react-icons/rx";
import './popup.css';
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
const SideWindow = () => {
  SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative w-72 a">
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {/* <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <i className="fas fa-user" />
        </button> */}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center direction-column flex-col">
          {/* <div className="bg-white p-6 rounded" style={{ width: '30%', height: '70%' }}> */}
          <button onClick={closePopup} className="mx-[1000px] mt-[0px] text-lg  text-white rounded">
          <FontAwesomeIcon icon={faX} />
            </button>
          <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                  delay: 3000, // Set the delay in milliseconds between slides
                  disableOnInteraction: false, // Allow interaction to stop autoplay
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: -100,
                  depth: 500,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay,EffectCoverflow, Pagination]}
                className="mySwiper"
                 >              
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
            
          </div>
        // </div>
      )}
    </div>
  );
};

export default SideWindow;
