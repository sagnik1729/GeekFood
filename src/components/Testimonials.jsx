import React from 'react';
import './Testimonials.css';
import avatar from '../assets/avatar.png'; 

const testimonials = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
    name: 'Gladís Lennon',
    role: 'Head of SEO',
    avatar,
}));

const Testimonials = () => (
    <section className="testimonials">
        {testimonials.map(({ id, text, name, role, avatar }) => (
            <div key={id} className="testimonial-card">
                <p>{text}</p>
                <div className="testimonial-author">
                    <img src={avatar} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
);

export default Testimonials;