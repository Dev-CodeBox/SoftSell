import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setForm({ name: "", email: "", company: "", license: "", message: "" });
    window.location.reload();
  };

  return (
    <section className="w-full px-4 md:px-10 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl font-bold text-cyan-700">SoftSell</h1>
          <p className="text-gray-600 text-lg">
            Need software licenses? Let SoftSell help you get started. We’re just a message away!
          </p>
          <div className="text-gray-700 space-y-2 text-left">
            <p className="flex items-center gap-3">
              <MapPin className="text-cyan-600" /> 123 Innovation Lane, India
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-cyan-600" /> support@softsell.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-cyan-600" /> +91-9876543210
            </p>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 grid gap-6 p-6 md:p-8 bg-white rounded-xl shadow-xl"
        >
          <input
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            name="company"
            placeholder="Company Name"
            required
            value={form.company}
            onChange={handleChange}
          />
          <select
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            name="license"
            required
            value={form.license}
            onChange={handleChange}
          >
            <option value="">Select License Type</option>
            <option value="office">MS Office</option>
            <option value="adobe">Adobe Suite</option>
            <option value="dev">Dev Tools</option>
          </select>
          <textarea
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactForm;
