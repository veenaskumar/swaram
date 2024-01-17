import React from 'react'
import Home from '../components/home'
import Sponsers from '../components/sponsers' 
import About from '../components/about'
import Gallary from '../components/gallary'
import Ourteam from '../components/ourteam'
import Contact from '../components/contact' 
import SideWindow from '../components/popup'
function Main() {
  return (
     
      <div>
      <Home />
      <Sponsers />
      <About /><br />
      <SideWindow />
      <Gallary />
      <Ourteam />
      <Contact />
      </div>

  )
}

export default Main