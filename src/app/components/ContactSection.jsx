'use client';


import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#070B12]">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Touch
          </span>
        </h2>
        <p className="text-gray-300">
          Have a project in mind or want to learn more about our services?
          Reach out to us!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input type="text" id="subject" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can we help you?" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or inquiry..."></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 h-full">
            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-gray-400">
                    No 140, 1/1 Old Kesbewa Rd, Nugegoda, Western
                    Province, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">077 744 9332</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">
                    info@breadcrumbsinnovations.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-gray-400">
                    Monday to Friday, 9:00 AM to 5:30 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575561175713!2d79.8891!3d6.8652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a4a3b04b0dd%3A0xa2460e9e1b8a817!2sNugegoda%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} loading="lazy" title="Breadcrumbs Innovations Office Location"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}