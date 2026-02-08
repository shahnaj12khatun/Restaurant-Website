import React, { useState } from 'react';
import ReservationForm from '../components/Forms/ReservationForm';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We will get back to you soon.");
    };

    return (
        <div className="contact-page container p-2">
            <h1 className="text-center mb-1">Contact Us</h1>

            <div className="contact-grid">
                <div className="contact-info-section">
                    <h2>Get in Touch</h2>
                    <p className="mb-1">We'd love to hear from you. Book a table or send us a message.</p>

                    <div className="info-item">
                        <MapPin className="icon" size={24} />
                        <div>
                            <h4>Location</h4>
                            <p>123 Culinary Street, Foodie City, FC 12345</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="icon" size={24} />
                        <div>
                            <h4>Phone</h4>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Mail className="icon" size={24} />
                        <div>
                            <h4>Email</h4>
                            <p>info@gourmethaven.com</p>
                        </div>
                    </div>

                    <form className="message-form mt-1" onSubmit={handleSubmit}>
                        <h3>Send a Message</h3>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit" className="btn">Send Message <Send size={16} /></button>
                    </form>
                </div>

                <div className="reservation-section">
                    <ReservationForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
