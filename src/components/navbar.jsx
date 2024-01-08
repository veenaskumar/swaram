import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'



function Navbar() {
    const handleSetActive = (to) => {
        console.log(to);
      };
    
    return (
        <div className='flex justify-between items-center pl-[1rem] pr-[1rem] h-[50px] w-[100%] border border-black fixed top-0 bg-neutral-500'>
            <div>
                <Link to='#home' spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive} >Swaram</Link>
            </div>
            <div className='flex justify-between gap-[2rem]'>
                <Link to="#home" spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}  >Home</Link>
                <Link to="#about" spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} 
                    onSetActive={handleSetActive} >About</Link>
                <Link to="#gallary" spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}  >Gallary</Link>
                <Link to="#ourteam" spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500} 
                    onSetActive={handleSetActive} >Our Team</Link>
                <Link to="#contact" spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500} 
                    onSetActive={handleSetActive} >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar