import './stylesheet/home.css';
import Main from './pages/main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar1 from './components/navbar1';
import Ourteam_page from './pages/ourteam_page';
// import { Switch } from 'react-router-dom';
function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ourteam' element={<Ourteam_page />} />
      </Routes>
  );
}

export default App;
