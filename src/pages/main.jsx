import React from 'react'
import Home from '../components/home'
import About from '../components/about'
import Gallary from '../components/gallary'
import Ourteam from '../components/ourteam'
import Contact from '../components/contact'
import Sponsers from '../components/sponsers'
function Main() {
  return (

    <div>
      <Home />
      <Sponsers />
      <About />
      <Gallary />
      <Ourteam />
      <Contact />
    </div>

  )
}

export default Main