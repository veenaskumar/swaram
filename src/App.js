import './stylesheet/home.css';
import Main from './pages/main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar1 from './components/navbar1';
import Ourteam_page from './pages/ourteam_page';
import Social_activities from './pages/social_activities';
import Home from './components/Home/home';
import About from './components/about';
// import Gal from './pages/gallary';
// import { Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/ourteam' element={<Ourteam_page />} />
        <Route path='/social' element={<Social_activities />} />
        {/* <Route path="/social#about" exact component={About} /> */}
        {/* <Route path='/Gallary_page' element={<Gal />} /> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
