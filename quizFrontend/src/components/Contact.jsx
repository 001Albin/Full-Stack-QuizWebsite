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
    <div className="bg-black min-h-screen flex justify-center items-start p-6 pt-12 md:pt-24 text-white">
      <div className="w-full max-w-4xl bg-black bg-opacity-90 backdrop-blur-lg rounded-2xl p-10 shadow-2xl md:border md:border-blue-600">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-10">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2 text-gray-300 space-y-6">
            <p className="text-lg">
            📩 We'd love to hear from you! Whether you have a question 
            ❓, feedback 💬, or a collaboration idea 🤝 — feel free to reach out. We're here to help!
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <span>support@example.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <span>+1 555 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">🌐</span>
                <span>www.example.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
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
                      className="w-full p-3 rounded-md bg-black border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                      placeholder="Your message..."
                    />
                  ) : (
                    <input
                      type={key === "email" ? "email" : "text"}
                      id={key}
                      name={key}
                      value={form[key]}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md bg-black border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
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
                className={`w-full py-3 bg-blue-900 hover:bg-blue-700 rounded-md font-semibold transition duration-300 ${
                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
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
