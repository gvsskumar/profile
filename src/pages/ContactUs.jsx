import SocialMediaIcons from '../components/SocialMediaIcons';

const ContactUs = () => {
 
    return (
<section className="py-4 md:py-8" id="contact">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
<p className="text-subtext-light dark:text-subtext-dark text-lg mb-8">
                    Let's discuss your next project
                </p>
<h3 className="text-xl font-semibold mb-4">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<span className="material-icons text-primary">email</span>
<span className="text-subtext-light dark:text-subtext-dark">gvsskumar502@gmail.com</span>
</div>
<div className="flex items-center space-x-3">
<span className="material-icons text-primary">phone</span>
<span className="text-subtext-light dark:text-subtext-dark">+91 9346814210</span>
</div>
<div className="flex items-center space-x-3">
<span className="material-icons text-primary">location_on</span>
<span className="text-subtext-light dark:text-subtext-dark">Hyderabad, India</span>
</div>
</div>
<SocialMediaIcons />
</div>
<div className="bg-card-light dark:bg-card-dark p-8 rounded-lg shadow-sm">
<form action="#" className="space-y-6" method="POST">
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="name">Name</label>
<div className="mt-1">
<input autoComplete="name" className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="name" name="name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="email">Email</label>
<div className="mt-1">
<input autoComplete="email" className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="email" name="email" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="message">Message</label>
<div className="mt-1">
<textarea className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="message" name="message" rows="4"></textarea>
</div>
</div>
<div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                            Send Message
                        </button>
</div>
</form>
</div>
</div>
</section>
    )
}   
export default ContactUs;