// import './stylesheet/home.css';
import Main from './pages/main';
import { BrowserRouter, Route,Routes, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar1 from './components/navbar';
import Ourteam_page from './pages/ourteam_page';
import Social_activities from './pages/social_activities';
import Home from './components/Home/home';
import About from './components/about';
import Sponser from './pages/sponser';
import Gal from './pages/gallary';
import React from 'react';
function App() {

  return (
      <Routes>
        <Route path='/'  element={<Main /> } />
        <Route path='/ourteam' element={<Ourteam_page />} />
        <Route path='/social' element={<Social_activities />} />
        <Route path='/gallary' element={<Gal />}/>
        <Route path='/sponsers' element={<Sponser />}/>
      </Routes>
  );
}

export default App;
