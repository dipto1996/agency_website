import React, { useState } from 'react';

const ContactModal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://agency-website-backend.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setResponse(data.message);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-indigo-50 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Let’s Talk</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-lg border" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-lg border" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 rounded-lg border h-32" required></textarea>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-2xl font-medium">Send Message</button>
        {response && <p className="text-green-600 font-semibold mt-2">{response}</p>}
      </form>
    </section>
  );
};

export default ContactModal;
