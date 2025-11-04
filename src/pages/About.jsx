const About = () => {
    return ( 
<section className="py-4 md:py-8" id="about">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-bold mb-4">About Me</h2>
<p className="text-subtext-light dark:text-subtext-dark text-lg">
                Dedicated full-stack developer with expertise in modern web technologies and a passion for crafting efficient, scalable solutions.
            </p>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-8">
<div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center shadow-sm hover:shadow-lg transition">
<div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900/50 text-primary rounded-full mb-4">
<span className="material-icons text-3xl">code</span>
</div>
<h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
<p className="text-subtext-light dark:text-subtext-dark">Building beautiful, responsive, and interactive user interfaces with React, Next.js, and Tailwind CSS.</p>
</div>
<div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center shadow-sm hover:shadow-lg transition">
<div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900/50 text-primary rounded-full mb-4">
<span className="material-icons text-3xl">dns</span>
</div>
<h3 className="text-xl font-semibold mb-2">Backend Development</h3>
<p className="text-subtext-light dark:text-subtext-dark">Crafting robust and scalable server-side applications with Node.js, Python, and managing databases with MongoDB and MySQL.</p>
</div>
<div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center shadow-sm hover:shadow-lg transition">
<div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900/50 text-primary rounded-full mb-4">
<span className="material-icons text-3xl">checklist</span>
</div>
<h3 className="text-xl font-semibold mb-2">Testing &amp; Quality</h3>
<p className="text-subtext-light dark:text-subtext-dark">Ensuring code quality and reliability through comprehensive unit and integration testing with Jest and Cypress.</p>
</div>
</div>
</section>
    )
}   
export default About;