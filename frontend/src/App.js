import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Your Email" onChange={handleChange} /><br />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea><br />
        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
