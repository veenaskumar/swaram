import './App.css';
import Main from './pages/main';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
       <Navbar />
       <Main/>
       
    </div>
  );
}

export default App;
