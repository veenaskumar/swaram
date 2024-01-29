import Navbar1 from '../components/navbar1'
import React, { useRef } from "react";
import Slider from "react-slick";


function Social_activities() {
  const sliderRef = useRef(null);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='h-[100vh] pt-[100px]'>
      <Navbar1 />
      
      <div  >
      <Slider ref={sliderRef} {...settings} >
        <div>
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" alt="" height={"100px"} width={"100%"} className='object-fill '/>
        </div>
        <div>
        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="" height={"100px"} width={"100%"}/>
        </div>
        <div>
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" alt="" height={"100px"} width={"100%"}/>
        </div>
        
      </Slider>
      
    </div>
     <div>
      <div>
      <h1>Accomplishments of SWARAM</h1>
      </div>
      <div>

      </div>

     </div>
    </div>
  )
}

export default Social_activities
