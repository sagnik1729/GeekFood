import React from 'react';
import './FeatureSection.css';
import featureImg from '../assets/feature.jpg';

const FeatureSection = () => (
    <section className="feature">
        <div className="feature__image-container">
            <img src={featureImg} alt="Feature" className="feature__image" />
        </div>
        <div className="feature__content">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!
                Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos,
                aperiam architecto eius quis quibusdam fugiat dicta.
            </p>
            <button className="btn btn-primary">Get in Touch</button>
        </div>
    </section>
);

export default FeatureSection;
