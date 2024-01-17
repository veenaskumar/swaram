import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images//logo.jpg'
import '../stylesheet/navbar.css'

const Navbar1 = () => {
    const handleSetActive = (to) => {
        console.log(to);
      };

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onSetActive={handleSetActive}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#gallary' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Gallary</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Social Activites</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#ourteam' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Our Team</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar1
