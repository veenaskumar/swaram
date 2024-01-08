import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'



function Navbar() {
    return (
        <div className='flex justify-between items-center pl-[1rem] pr-[1rem] h-[50px] w-[100%] border border-black fixed top-0 bg-neutral-500'>
            <div>
                <Link to='#home'>Swaram</Link>
            </div>
            <div className='flex justify-between gap-[2rem]'>
                <Link to="#home" >Home</Link>
                <Link to="#about">About</Link>
                <Link to="#gallary">Gallary</Link>
                <Link to="#ourteam">Our Team</Link>
                <Link to="#contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar