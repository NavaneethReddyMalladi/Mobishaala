
import React from 'react';


const services = [
    { id: 1, title: 'Call Center Solutions', description: 'Expert call center services tailored to your needs.' },
    { id: 2, title: 'BPO Services', description: 'Streamline operations with our efficient BPO services.' },
];

const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
