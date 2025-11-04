import { Link } from "react-router-dom";
import {Routing} from './Routing';
import resume from "../assets/SuryaKumar.docx";

const Header = () => {
    return (
<header className="flex justify-between items-center py-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
<span className="material-icons text-gray-500 dark:text-gray-400">person</span>
</div>
<Link className="font-semibold text-xl" to="/">G.Surya Kumar</Link>

</div>
<nav className="hidden md:flex items-center space-x-8">
<Routing />
</nav>
<a className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition" href={resume} download>Download CV</a>
</header>
    )       
}

export default Header