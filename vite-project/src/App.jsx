import ReactDOM from "react-dom";
import logo from "./Images/1.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Map from './map';
import Data from './Data';
import Nopage from './Nopage';
import Reference from "./reference";
import Contact from "./contact";


function App() {
    return (
        <> 
    <div id="title-block">
        <a href="/">
        <img src={logo} id="main-icon" alt="logo" style={{ width: '200px', height: '200px' }} />
        </a>
{/* wl484: moved title from navbar.jsx into a <span> tag to display the title next to the icon */}
        <span id="title"> &nbsp; PhillyFeelSafe</span>
    </div>
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="Map" element={<Map />} />
                  <Route path="Reference" element={<Reference />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Data" element={<Data />} />
                  <Route path="*" element={<Nopage />} />
              </Route>
         </Routes>
     </BrowserRouter>
     </>
  );
  
}

export default App;
