import './App.css';
import Main from './pages/main';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import PanningRectangles from './components/gallerym';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <PanningRectangles></PanningRectangles> */}
=======
import Navbar1 from './components/navbar1';
function App() {
  return (
    <div className="App">
       <Navbar1 />
       <Main/>
>>>>>>> 3ebb2cb0d5ddb1578afaa19a4e6f3a33b1a92ed3
    </div>
  );
}

export default App;
