import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v)) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      console.log("Submitted:", form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black  text-white min-h-screen flex items-center justify-center p-6">
      <div className="w-full border-[2px] border-blue-500 max-w-4xl  bg-gray-950 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-semibold mb-8 text-blue-400 tracking-wide text-center">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <p className="text-gray-300 leading-relaxed mb-6">
              We're here to assist you. Please use the form below to send us a message.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">support@example.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+1 555 123 4567</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1" />
                </svg>
                <span className="text-sm">www.example.com</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email"].map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-300 capitalize tracking-wide">{key}</label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-800 border border-blue-600 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-gray-200"
                    placeholder={`Your ${key}`}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-300 capitalize tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={form.message ? "6" : "3"}
                  className="w-full p-3 rounded-md bg-gray-800 border border-blue-600 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical overflow-y-auto text-gray-200"
                  placeholder="Your Message"
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;