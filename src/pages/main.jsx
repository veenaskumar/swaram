import React from 'react'
import Home from '../components/Home/home'
import Sponsers from '../components/sponsers' 
import About from '../components/about'
import Gallery from '../components/gallary/gallary_sab'
import Ourteam from '../components/ourteam'
import Quotes from '../components/quotes'
import Contact from '../components/contact' 
import SideWindow from '../components/popup'
import Navbar1 from '../components/navbar1'
import Our_thoughts from '../components/our_thoughts'
function Main() {
  return (
     
      <div className='flex flex-col gap-[2.5rem] m-w-[100%]'>
      <Navbar1 />
      <Home />
      <Sponsers /><br /><br />
      <About /><br />
      <Our_thoughts />
      <SideWindow />
      <Gallery />
      <Ourteam />
      <Quotes />
      <Contact />
      </div>

  )
}

export default Main