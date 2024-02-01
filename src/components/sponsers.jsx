import React from 'react'
import Data from '../json/sponser.js'
import Marquee from 'react-fast-marquee';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
function Sponsers() {
    return (
        <div className='flex flex-col gap-[3rem] justify-center items-center'>
            <Fade bottom duration={1200} >
            
                <div className='flex flex-col gap-[2rem]'>
                    <h1 className='font-semibold text-[28px] text-center sm:text-[20px]'>Our Sponsers</h1>
                    <Marquee direction="left" speed={100} delay={5} pauseOnHover className='h-[100px]' >
                        <div className='mx-auto flex gap-[2rem] w-[100%]  justify-between  '>
                            {
                                Data.map((item) => {
                                    return (
                                        <img src={item.image} alt="" height={"200px"} width={"200px"} className='z-0' />
                                    )
                                })
                            }
                            <br />
                        </div>
                    </Marquee>
                </div>
           
        </Fade>
          <Zoom duration={500} delay={200}>  <button className='bg-[red] w-[120px] text-center py-[10px] rounded-2xl hover:font-semibold'>Read More</button></Zoom>
        </div>
    )
}

export default Sponsers