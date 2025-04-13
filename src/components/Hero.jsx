import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.jpg'; 

const Hero = () => (
    <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
    >
        <div className="hero__overlay" />

        <div className="hero__content">
            <h1 className="hero__title">
                Let us find your{' '}
                <span className="hero__highlight">Forever Food</span>
            </h1>
            <p className="hero__subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="hero__buttons">
                <button className="btn btn-primary">Search Now</button>
                <button className="btn btn-secondary">Know more</button>
            </div>
        </div>
    </section>
);

export default Hero;
