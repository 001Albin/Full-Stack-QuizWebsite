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
    <div className="bg-black min-h-screen flex items-center justify-center p-6 text-white mt-5">
      <div className="w-full max-w-4xl bg-black bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-500">
        <h2 className="text-3xl font-semibold text-blue-400 tracking-wide text-center mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 text-gray-300">
            <p className="leading-relaxed mb-6">
              Have any questions or feedback? Feel free to reach out, and we’ll get back to you shortly!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <span className="text-sm">support@example.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <span className="text-sm">+1 555 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">🌐</span>
                <span className="text-sm">www.example.com</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {Object.keys(form).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-300 capitalize">{key}</label>
                  {key === "message" ? (
                    <textarea
                      name={key}
                      value={form[key]}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-blue-600 focus:ring-2 focus:ring-blue-500 transition-all text-gray-200"
                      placeholder={`Enter your ${key}`}
                    />
                  ) : (
                    <input
                      type={key === "email" ? "email" : "text"}
                      name={key}
                      value={form[key]}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-blue-600 focus:ring-2 focus:ring-blue-500 transition-all text-gray-200"
                      placeholder={`Enter your ${key}`}
                    />
                  )}
                </div>
              ))}
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {success && <p className="text-green-500 text-sm text-center">Message sent successfully!</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
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
