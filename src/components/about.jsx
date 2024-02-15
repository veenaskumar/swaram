import React from 'react'
import Fade from 'react-reveal/Fade';
function About() {
  return (
    <div id='about' className='md:text-center sm:text-[14px] flex flex-col gap-[1rem] md:text-[15px] '>
      <Fade top>
        <h1 className=' font-semibold text-[28px] sm:text-center sm:text-[20px] md:text-[22px]' >Story of <span className='text-[red]'>SWARAM</span></h1>
      </Fade>
      <div className='flex items-center justify-between gap-[3rem] pl-[50px] pr-[50px] sm:flex sm:flex-col-reverse sm:gap-[2rem]'>
      <Fade left>
        <div className='  text-[16px] sm:text-justify w-[50%] sm:w-[100%] sm:text-[14px] '>
         <span className='text-[red] font-bold text-[24px]sm:text-[18px] md:text-[17px]'>S</span><span className='text-[red] font-bold '>waram</span> is a event that is the yearly mega-event of fund-raiser concert that is a tradition and pride of ROTARACT CLUB OF KEC. Asia’s second largest auditorium-KONGU CONVENTION CENTRE is indeed a magnanimous place that shows our show’s marvels and the sincerity hearts and thoughts of 8000 people. Glimmering celebration on one-side and the other side is the enlightening of lives-indeed we’re always at the service of society. Illiteracy, poverty, hygiene ,health and environment name your say and we shall slay with our skills, service, love and kindness and SWARAM is one such backbone behind such wonders.
        </div>
      </Fade>
      <Fade right>
        <div>
          <img src="https://rotaract.kongu.edu/images/2k14.png" alt="" height={"500px"} width={"500px"} className=''/>
        </div>
      </Fade>
      </div>

    </div>

  )
}

export default About