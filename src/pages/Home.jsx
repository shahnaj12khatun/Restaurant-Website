import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content text-center">
                    <h1>Experience the Taste of <br /><span>Luxury & Tradition</span></h1>
                    <p>Fresh ingredients, authentic recipes, and a warm atmosphere.</p>
                    <div className="hero-buttons">
                        <Link to="/menu" className="btn">View Menu</Link>
                        <Link to="/contact" className="btn btn-outline">Book a Table</Link>
                    </div>
                </div>
            </section>

            <section className="features container p-2">
                <div className="feature-grid">
                    <div className="feature-item">
                        <h3>Fresh Food</h3>
                        <p>We use only the best ingredients available.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Fast Delivery</h3>
                        <p>Hot and fresh food delivered to your doorstep.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Master Chefs</h3>
                        <p>Our chefs are experts in their craft.</p>
                    </div>
                </div>
            </section>

            <section className="cta text-center p-2">
                <h2>Ready to Order?</h2>
                <p>Browse our menu and get your favorite food delivered.</p>
                <Link to="/menu" className="btn mt-1">Order Now</Link>
            </section>
        </div>
    );
};

export default Home;
