import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skils from '../pages/Skils';
import ContactUs from '../pages/ContactUs';
export const Routing  = () =>{
    return(

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skils />} />
    <Route path="/projects" element={<Projects />} />    
    <Route path="/contact-us" element={<ContactUs />} />
  </Routes>

    )
}