import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable websites tailored for performance and user experience.',
  },
  {
    title: 'AI Integrations',
    description: 'Smart solutions using AI/ML to power your business with intelligence.',
  },
  {
    title: 'UX/UI Design',
    description: 'User-centric designs to engage and convert visitors into loyal customers.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
