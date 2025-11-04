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

</div>
<SocialMediaIcons />
</div>
<div className="flex justify-center items-center">
<div class="w-48 h-48 sm:w-64 sm:h-64 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
  <img
    alt="Profile"
    class="w-40 h-40 sm:w-56 sm:h-56 rounded-full"
    src={Profile}
  />
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