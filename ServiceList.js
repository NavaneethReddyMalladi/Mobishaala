import React from 'react';
import ServiceCard from './ServiceCard';


const services = [
    { id: 1, title: 'Call Center Solutions', description: 'Expert call center services tailored to your needs.' },
    { id: 2, title: 'BPO Services', description: 'Streamline operations with our efficient BPO services.' },
    { id: 3, title: 'Data Management', description: 'Accurate and secure data management solutions.' },
    { id: 4, title: 'IT Support', description: 'Reliable IT support to keep your operations running smoothly.' },
];

const ServiceList = () => {
    return (
        <section className="service-list">
            <h2>Our Services</h2>
            <div className="service-list-container">
                {services.map(service => (
                    <ServiceCard 
                        key={service.id} 
                        title={service.title} 
                        description={service.description} 
                    />
                ))}
            </div>
        </section>
    );
};

export default ServiceList;
