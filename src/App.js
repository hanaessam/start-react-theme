import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import {Outlet} from 'react-router-dom';

function App() {
  return (<>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
    
  );
}

export default App;
