import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-6xl font-bold">
          <Link to='#home' spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className="text-gray-900">
            Swaram
          </Link>
        </div>
        <div className="text-4xl   justify-between flex space-x-9">
          <Link to='#home' spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className="nav-link font-med">
            Home
          </Link>
          <Link to='#about' spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className="nav-link">
            About
          </Link>
          <Link to='#gallery' spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className="nav-link">
            Gallery
          </Link>
          <Link to='#ourteam' spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive} className="nav-link">
            Our Team
          </Link>
          <Link to='#contact' spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive} className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
