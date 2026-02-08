import React from 'react';
import './Footer.css';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>GourmetHaven</h3>
                    <p>Experience the best culinary delights in town. Fresh ingredients, passionate chefs, and unforgettable flavors.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>123 Culinary Street, Foodie City, FC 12345</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@gourmethaven.com</p>
                </div>
                <div className="footer-section">
                    <h4>Opening Hours</h4>
                    <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 11:00 PM</p>
                </div>
                <div className="footer-section social-links">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Twitter /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GourmetHaven. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
