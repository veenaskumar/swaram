import Navbar1 from "../components/navbar.jsx";
import React, { useRef } from "react";
import Slider from "react-slick";
import { TiTick } from "react-icons/ti";
import Contact from '../components/contact';
import { Zoom,Fade } from 'react-reveal';

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
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='min-h-[100%] pt-[90px] flex flex-col gap-[5rem] sm:gap-0 bg-[#252424]'>
      <Navbar1/>
      <div  >
        <Slider ref={sliderRef} {...settings} arrows={false} className='min-h-[50vh]  ' >
          <div className='relative sm:min-w-[100%] sm:m-0 sm:p-0'>
            <img src="data:image/jpeg;base64,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" alt="" className='min-w-[100%] max-h-[50vh] object-cover brightness-50' />
            <div className='absolute top-[40%] w-[100%]'>
              <h1 className=' text-center text-wrap sm:text-[18px] sm:px-[5%]'>India's Largest Indoor auditorium with state of the art facilities</h1>
            </div>
          </div>
          <div className='relative sm:min-w-[100%] sm:m-0 sm:p-0 '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykRGKaVvpJUms2wilyYmCGFJAZdMBlLkbDA&usqp=CAU" alt="" className='min-w-[100%] max-h-[50vh] object-cover brightness-50' />
            <div className='absolute top-[40%] w-[100%]'>
              <h1 className=' text-center text-wrap sm:text-[18px] sm:px-[5%]'>Spread over 8 acres with build up area of 2Lakhs Sq.Ft</h1>
            </div>
          </div>
          <div className='relative sm:min-w-[100%] sm:m-0 sm:p-0'>
            <img src="https://creativegroup.co.in/camera/projects/19/1.jpg?1704326400028" alt="" className='min-w-[100%] max-h-[50vh] object-cover brightness-50' />
            <div className='absolute top-[40%] w-[100%]'>
              <h1 className=' text-center text-wrap sm:text-[18px] sm:px-[5%]'>Magnanimous seating capacity of 5500 people wiht provisions for 2000 extra seatings</h1>
            </div>
          </div>
        </Slider>
      </div>
      <div className='flex flex-col gap-[5rem]  items-center '>
        <Zoom duration={1000} delay={500}>
        <div>
          <h1 className='sm:text-[18px]'>Accomplishments of SWARAM</h1>
        </div>
        </Zoom>
        
        <div className='w-[100%] flex flex-col gap-[3rem] px-[5%]'>
        <Fade duration={1000} delay={200} left >
          <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem]  sm:text-[14px]  '>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k19.png" alt="" className='w-[400px] rounded-2xl' />
            </div>
            <div>
              <ul >
                {/** 2023 */}
                
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated Roof top fans to Old Age homes</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated basic needs to orphanages</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]'/>Donated Text books to government schools all over Erode and Perundurai</li>
              </ul>
            </div>
          </div>
          </Fade>
          <Fade duration={1000} delay={200} right>
          <div className='flex md:flex-row-reverse justify-around items-center  sm:flex-col sm:gap-[1rem] sm:text-[14px]'>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k17.png" alt="" className='w-[400px] rounded-2xl ' />
            </div>
            <div>
              <ul className="">
                {/** 2018 */}
                <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]' /><div>Donated <span className="text-[red] font-semibold">COLPOSCOPY DEVICE</span> for Cancer Treatment at IRTT Hospital,<br/>Perundurai worth 2 Lakhs</div></li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplongs for the pubic</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]'/>Donated Text books to government schools all over Erode and Perundurai</li>
              </ul>
            </div>
          </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
          <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem]  sm:text-[14px]   '>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k18.png" alt="" className='w-[400px] rounded-2xl' />
            </div>
            <div>
              <ul >
                {/** 2017 */}
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings for environment awareness.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Conducted organ donation awareness camp.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Vastara Dhanam to orphanages.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated 2.5 lakhs for nearly 15 Government Schools in & <br /> around Perundurai to satisfy their basic need</li>
              </ul>
            </div>
          </div>
          </Fade>
          <Fade duration={1000} delay={200} right>
          <div className='flex justify-around md:flex-row-reverse items-center sm:flex-col sm:gap-[1rem] sm:text-[14px] '>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k14.png" alt="" className='w-[400px] rounded-2xl' />
            </div>
            <div>
              <ul >
                {/** 2016 */}
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Conducted Free Eye Camp bebefits needy</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Vasthra Dhanam to Orphanages</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Created Public Awareness atOrgan Donation</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated 2.55 Lakhs for Open Heart Surgery to NGO's</li>
              </ul>
            </div>
          </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
          <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem] sm:text-[14px] '>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k20-2.jpg" alt="" className='w-[400px] rounded-2xl' />
            </div>
            <div>
              <ul >
                {/** 2015 */}
                <li className='flex items-center  gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />Provided RO water purifiers to Schools.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' />  Contributed motors to old age homes.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red'  />Donated basic needs to Idhayam Trust, Erode.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red'  />Eye Camp has been held to the benefit of needy.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red'  />Installed UPS in Government Schools.</li>
              </ul>
            </div>
          </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
          <div className='flex md:flex-row-reverse justify-around items-center  sm:flex-col sm:gap-[1rem] sm:text-[14px]'>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k20-2.jpg" alt="" className='w-[400px] rounded-2xl' />
            </div>
            <div>
              <ul >
                {/** 2014 */}
                <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]'/>Improving facilities in Government School to be on par with private schools, <br />setting up RO water purifiers and improving sanitation facilities and setting up libraries.</li>
                <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[50px]'/>To uplift the living standards of rag-pickers community and to help them to get their basic essentials.</li>
              </ul>
            </div>
          </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
          <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem] sm:text-[12px] sm:justify-start sm:items-start '>
            <div>
              <img src="https://rotaract.kongu.edu/images/2k20-2.jpg" alt="" className='w-[400px] rounded-2xl' />
            </div>
            <div>
              <ul >
                {/** 2013 */}
                <li className='flex items-center gap-3 sm:w-[90%] '><TiTick size={25} color='red' className='sm:size-[40px]' />Government Schools in and around Erode were provided with utensils,<br /> water tanks, sports articles and computer accessories.</li>
                <li className='flex items-center gap-3 sm:w-[90%] '><TiTick size={25} color='red'className='sm:size-[40px]' />
Erode Arima Trust School was provided supporting accessories for physically<br /> challenged people.
</li>
                <li className='flex items-center gap-3 sm:w-[90%] '><TiTick size={25} color='red'className='sm:size-[40px]' />WJ Welfare Trust, Perundurai was provided with mats, pillow and bed.</li>
                <li className='flex items-center gap-3 sm:w-[90%]'><TiTick size={25} color='red' className='sm:size-[40px]'  />Donated Text books to government schools all over Erode and Perundurai</li>
              </ul>
            </div>
          </div>
          </Fade>
        </div>
      </div>
      <Contact />
    </div>
    
  )
}

export default Social_activities

