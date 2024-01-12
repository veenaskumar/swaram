import React from 'react'
import Fade from 'react-reveal/Fade';
function About() {
  return (
      <div id='about' className='md:text-center flex flex-col gap-[1rem] '>
        <Fade right>
        <h1 className=' font-bold text-[28px]' >About</h1>
        </Fade>
        <Fade left>
        <div className='pl-[50px] pr-[50px] text-center text-[16px] sm:text-justify'>
          SWARAM is a event that is the yearly mega-event of fund-raiser concert that is a tradition and pride of ROTARACT CLUB OF KEC. Asia’s second largest auditorium-KONGU CONVENTION CENTRE is indeed a magnanimous place that shows our show’s marvels and the sincerity hearts and thoughts of 8000 people. Glimmering celebration on one-side and the other side is the enlightening of lives-indeed we’re always at the service of society. Illiteracy, poverty, hygiene ,health and environment name your say and we shall slay with our skills, service, love and kindness and SWARAM is one such backbone behind such wonders.
        </div>
        </Fade>

      </div>
    
  )
}

export default About