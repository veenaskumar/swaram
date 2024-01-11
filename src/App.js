import './App.css';
import Main from './pages/main';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import PanningRectangles from './components/gallerym';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <PanningRectangles></PanningRectangles> */}
    </div>
  );
}

export default App;
