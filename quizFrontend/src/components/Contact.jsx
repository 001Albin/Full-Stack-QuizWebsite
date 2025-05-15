import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, User, FileText, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-black p-5 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-4">Contact Us</h1>
        <p className="text-gray-300 text-lg text-center mb-8">We'd love to hear from you!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              {/* Existing blurs */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-600 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-600 rounded-full blur-lg"></div>

              {/* Additional blurs */}
              <div className="absolute top-20 right-1/3 w-20 h-20 bg-pink-500 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-yellow-400 rounded-full blur-xl"></div>
              <div className="absolute top-1/4 right-20 w-16 h-16 bg-green-400 rounded-full blur-lg"></div>
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-500 rounded-full blur-2xl"></div>
            </div>

            <div className="bg-black border border-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-400 mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-400 mt-1">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-green-400 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-yellow-400 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-400 mt-1">hello@company.com</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-sky-400 hover:text-sky-500">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-400" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-blue-400" />
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300"
            >
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
