import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1>Our Story</h1>
            </div>
            <div className="container about-content p-2">
                <div className="about-text">
                    <h2>A Tradition of Excellence</h2>
                    <p>
                        Founded in 1995, GourmetHaven started with a simple mission: to serve authentic flavors with a modern twist.
                        What began as a small family kitchen has grown into a beloved culinary destination.
                    </p>
                    <p>
                        We believe that food is more than just sustenance; it's an experience.
                        Our chefs carefully select the finest local ingredients to create dishes that tell a story on your plate.
                        Whether you're here for a quick lunch or a romantic dinner, we promise an unforgettable dining experience.
                    </p>
                    <div className="chef-signature">
                        <p>Chef Antonio Rossi</p>
                        <span>Head Chef & Founder</span>
                    </div>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" />
                </div>
            </div>
        </div>
    );
};

export default About;
