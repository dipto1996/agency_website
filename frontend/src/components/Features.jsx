import React from 'react';

const features = [
  {
    title: 'AI-Powered Development',
    desc: 'We build robust models with explainability, performance, and scale in mind.'
  },
  {
    title: 'End-to-End Ownership',
    desc: 'From idea to deployment — we build it all. Backend, frontend, ML, and infra.'
  },
  {
    title: 'Deep Domain Expertise',
    desc: 'Finance, E-commerce, Healthcare — we’ve done it all, with data that matters.'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feat, idx) => (
          <div key={idx} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">{feat.title}</h3>
            <p className="text-gray-600">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
