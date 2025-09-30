import { Link } from "react-router-dom";
import About from './About';
import Projects from './Projects';
import Skils from './Skils';
import ContactUs from './ContactUs';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Profile from "../assets/Kumar-Profile-Pic.jpg";
const Home = () => {
    return (
<>      
<main className="py-4 md:py-8">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-bold leading-tight">Full Stack Developer</h1>
<p className="text-subtext-light dark:text-subtext-dark text-lg">
            Passionate about creating robust web applications using modern front-end and back-end tools and techniques. Experienced in both frontend and backend development with a focus on clean, maintainable code.
          </p>
<div className="flex flex-wrap gap-4">
<Link className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-indigo-700 transition" to="/contact-us">
<span className="material-icons">email</span>
              Get In Touch
</Link>
{/* <Link className="bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-text-light dark:text-text-dark px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition" href="#">
<span className="material-icons">visibility</span>
              View Portfolio
            </Link> */}
</div>
<SocialMediaIcons />
</div>
<div className="flex justify-center items-center">
<div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
<img src={Profile} alt="Profile" className="w-56 h-56 sm:w-72 sm:h-72 rounded-full" />
{/* <span className="text-subtext-light dark:text-subtext-dark">Profile Image</span> */}
</div>
</div>
</div>
</main>
<About />
<Skils />
<Projects />
<ContactUs />
</>
    )
}   
export default Home;