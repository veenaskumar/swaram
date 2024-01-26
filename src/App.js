import './stylesheet/home.css';
import Main from './pages/main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar1 from './components/navbar1';
import Ourteam_page from './pages/ourteam_page';
import Social_activities from './pages/social_activities';
import Home from './components/Home/home';
import About from './components/about';
// import { Switch } from 'react-router-dom';
function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ourteam' element={<Ourteam_page />} />
        <Route path='/social' element={<Social_activities />} />
        <Route path="/social#about" exact component={About} />
      </Routes>
  );
}

export default App;
