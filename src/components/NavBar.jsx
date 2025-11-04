import { Link } from "react-router-dom";
import resume from "../assets/SuryaKumar.pdf";
const NavBar = () => {
    const menuStyle = "text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition";
    return (
        <nav className="flex justify-between items-center py-6">        
        <div className="flex items-center space-x-3">        
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
        <span className="material-icons text-gray-500 dark:text-gray-400">person</span>
        </div>
        <Link className="font-semibold text-xl" to="/">G.Surya Kumar</Link>         
        </div>        
        <nav className="hidden md:flex items-center space-x-8">        
        <Link className={menuStyle} to="/">Home</Link>
        <Link className={menuStyle} to="/about">About</Link>        
        <Link className={menuStyle} to="/skills">Skills</Link> 
        <Link className={menuStyle} to="/projects">Projects</Link>        
               
        <Link className={menuStyle} to="/contact-us">Contact</Link>        
        </nav>        
        <a className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition" href={resume} download>Download CV</a>        
        </nav>        
        );      
    }
export default NavBar