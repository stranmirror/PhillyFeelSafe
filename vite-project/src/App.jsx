import ReactDOM from "react-dom/client";
import logo from "./Images/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Map from './map';
import Nopage from './Nopage';
import Reference from "./reference";
import Contact from "./contact";



function App() {
    return (
        <> 
        <img src={logo} alt="logo" style={{ width: '400px', height: '200px' }} />
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="Map" element={<Map />} />
                  <Route path="Reference" element={<Reference />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="*" element={<Nopage />} />
              </Route>
         </Routes>
     </BrowserRouter>
     </>
  );
  
}

export default App;
