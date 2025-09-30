import { Link } from "react-router-dom";
const Projects = () => {
    return (
<section className="py-4 md:py-8" id="projects">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
<p className="text-subtext-light dark:text-subtext-dark text-lg">
                Some of my recent work.
            </p>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-8">
<div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
<div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
<span className="text-subtext-light dark:text-subtext-dark">Project Screenshot</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
<p className="text-subtext-light dark:text-subtext-dark mb-4">A full-stack e-commerce solution built with React, Next.js, and Python backend.</p>
<div className="flex justify-between items-center">
<Link className="text-primary font-semibold hover:underline" href="#">Read More</Link>
<div className="flex space-x-2">
<Link className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition" href="#"><span className="material-icons">code</span></Link>
<Link className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition" href="#"><span className="material-icons">open_in_new</span></Link>
</div>
</div>
</div>
</div>
<div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
<div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
<span className="text-subtext-light dark:text-subtext-dark">Project Screenshot</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Task Management App</h3>
<p className="text-subtext-light dark:text-subtext-dark mb-4">A collaborative task management application with real-time updates and team features.</p>
<div className="flex justify-between items-center">
<Link className="text-primary font-semibold hover:underline" href="#">Read More</Link>
<div className="flex space-x-2">
<Link className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition" href="#"><span className="material-icons">code</span></Link>
<Link className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition" href="#"><span className="material-icons">open_in_new</span></Link>
</div>
</div>
</div>
</div>
<div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
<div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
<span className="text-subtext-light dark:text-subtext-dark">Project Screenshot</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">AI Analytics Dashboard</h3>
<p className="text-subtext-light dark:text-subtext-dark mb-4">An interactive data visualization analytics dashboard with predictive insights.</p>
<div className="flex justify-between items-center">
<Link className="text-primary font-semibold hover:underline" href="#">Read More</Link>
<div className="flex space-x-2">
<Link className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition" href="#"><span className="material-icons">code</span></Link>
<Link className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition" href="#"><span className="material-icons">open_in_new</span></Link>
</div>
</div>
</div>
</div>
</div>
</section>
    )
}   
export default Projects;