import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v.trim())) {
      setError("All fields are required.");
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
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-5">

      <div className="max-w-6xl mx-auto bg-opacity-90 backdrop-blur-lg border border-blue-700 rounded-3xl shadow-xl p-8 md:p-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-10">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
            📩 We'd be delighted to hear from you. Whether you have a question, feedback, or a 
            proposal for collaboration — feel free to get in touch. We're here to assist you.
            </p>

            <ul className="space-y-5 text-base text-gray-400">
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl">📧</span>
                <span>support@example.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl">📞</span>
                <span>+1 555 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl">🌐</span>
                <span>www.example.com</span>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "message"].map((key) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-300 mb-1 capitalize"
                >
                  {key}
                </label>
                {key === "message" ? (
                  <textarea
                    id={key}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                ) : (
                  <input
                    type={key === "email" ? "email" : "text"}
                    id={key}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Your ${key}`}
                  />
                )}
              </div>
            ))}

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            {success && (
              <p className="text-sm text-green-500 text-center">
                Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting
                  ? "bg-blue-800 opacity-60 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
