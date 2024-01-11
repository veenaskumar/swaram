import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import About from '../components/about'
import Gallary from '../components/gallary'
import Ourteam from '../components/ourteam'
import Contact from '../components/contact'
import SideWindow from '../components/popup'

function Main() {
  return (
     
      <div>
       <Home />
       <br />
      <About />
      <SideWindow></SideWindow>
      <Gallary />
      <Ourteam />
      <Contact />
      </div>

  )
}

export default Main