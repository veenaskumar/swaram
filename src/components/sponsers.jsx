import React from 'react'
import Data from '../json/sponser.js'
import Marquee from 'react-fast-marquee';
function Sponsers() {
  return (
    <div className='font-bold font-weight text-[28px]'>
    <h1>Our Sponsers</h1>
    <Marquee direction="left" speed={100} delay={5} pauseOnHover>
    <div className='mx-auto flex gap-[2rem] w-[100%]  justify-between'>
        {
            Data.map((item)=>{
                return(
                <img src={item.image} alt="" height={"200px"} width={"200px"} />
                )
            })
        }
        <br />
    </div>
    </Marquee>
    </div>
  )
}

export default Sponsers