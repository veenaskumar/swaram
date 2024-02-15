import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';
function Quotes() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear", 
    
  };
  return (
    <Zoom>
    <div className=' text-black bg-[#1f1f20] sm:py-[5%] '>
      <div>
        <h1 className='text-[28px] font-semibold mt-[100px] sm:mt-[0rem] sm:px-[20px] text-[white] text-center sm:text-[20px]'>The Voice of the <span className='text-[red]'> Crowd</span></h1>
        <Slider {...settings} autoplay={true} arrows={false}>
        <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src="https://jthemes.net/themes/wp/eleven/wp-content/themes/eleven/assets/img/testimonial/testimonial-2.jpg" alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[60%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>Tharun</div>
              <div className='text-white sm:hidden'>B-TECH IT</div>
            </div>
          </div>
          <div className='text-[white] text-center '>
            
            Every event has a purpose and every setback its lesson. I have realized that failure,<br /> whether of the personal, professional, or even spiritual kind, is essential to personal expansion.
            
          </div>
          </div>  
          </div>
          <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src="https://jthemes.net/themes/wp/eleven/wp-content/themes/eleven/assets/img/testimonial/testimonial-2.jpg" alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[60%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>Tharun</div>
              <div className='text-white sm:hidden'>B-TECH IT</div>
            </div>
          </div>
          <div className='text-[white] text-center '>
            
            Every event has a purpose and every setback its lesson. I have realized that failure,<br /> whether of the personal, professional, or even spiritual kind, is essential to personal expansion.
            
          </div>
          </div>  
          </div>
          <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src="https://jthemes.net/themes/wp/eleven/wp-content/themes/eleven/assets/img/testimonial/testimonial-2.jpg" alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[60%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>Tharun</div>
              <div className='text-white sm:hidden'>B-TECH IT</div>
            </div>
          </div>
          <div className='text-[white] text-center '>
            
            Every event has a purpose and every setback its lesson. I have realized that failure,<br /> whether of the personal, professional, or even spiritual kind, is essential to personal expansion.
            
          </div>
          </div>  
          </div>
        </Slider>
      </div>
    </div>
    </Zoom>
  );
}

export default Quotes