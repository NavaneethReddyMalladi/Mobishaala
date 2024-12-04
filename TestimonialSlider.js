import React from "react";

const testimonials = [
  { text: "Great service and support!", author: "John Doe" },
  { text: "The team was extremely helpful and professional.", author: "Jane Smith" },
  { text: "Highly recommend their services for any business needs.", author: "Robert Brown" },
  { text: "They go above and beyond to deliver exceptional results.", author: "Emily Davis" },
  { text: "Excellent communication and timely execution.", author: "Michael Johnson" }
];

const TestimonialSection = () => {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
