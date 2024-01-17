import './stylesheet/home.css';
import Main from './pages/main';
import { Route,Routes } from 'react-router-dom';
import Navbar1 from './components/navbar1';
function App() {
  return (
    <div className="App">
       <Navbar1 />
       <Main/>
       

    </div>
  );
}

export default App;
