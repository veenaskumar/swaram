import React from 'react'
import Data from '../json/sponser.js'
import Marquee from 'react-fast-marquee';
import Fade from 'react-reveal/Fade';
function Sponsers() {
    return (
        <Fade bottom>
            <div className='flex flex-col gap-[2rem]'>
                <h1 className='font-bold text-[28px] text-center'>Our Sponsers</h1>
                <Marquee direction="left" speed={100} delay={5} pauseOnHover>
                    <div className='mx-auto flex gap-[2rem] w-[100%]  justify-between '>
                        {
                            Data.map((item) => {
                                return (
                                    <img src={item.image} alt="" height={"200px"} width={"200px"} className='z-0'/>
                                )
                            })
                        }
                        <br />
                    </div>
                </Marquee>
            </div>
        </Fade>
    )
}

export default Sponsers