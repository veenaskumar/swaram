import React from 'react'
import Home from '../components/Home/home'
import Sponsers from '../components/sponsers' 
import About from '../components/about'
import Gallery from '../components/gallary_sab'
import Ourteam from '../components/ourteam'
import Quotes from '../components/quotes'
import Contact from '../components/contact' 
import SideWindow from '../components/popup'
function Main() {
  return (
     
      <div className='flex flex-col gap-[2.5rem]'>
      <Home />
      <Sponsers /><br /><br />
      <About /><br />
      <SideWindow />
      <Gallery />
      <Ourteam />
      <Quotes />
      <Contact />
      </div>

  )
}

export default Main