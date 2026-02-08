import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        requests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation Request sent for ${formData.name} on ${formData.date} at ${formData.time}!`);
        setFormData({
            name: '', email: '', date: '', time: '', guests: '2', requests: ''
        });
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <h3>Book a Table</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
            </div>
            <div className="form-group">
                <label>Guests</label>
                <select name="guests" value={formData.guests} onChange={handleChange}>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                </select>
            </div>
            <div className="form-group">
                <label>Special Requests</label>
                <textarea name="requests" value={formData.requests} onChange={handleChange} rows="3"></textarea>
            </div>
            <button type="submit" className="btn">Reserve Now</button>
        </form>
    );
};

export default ReservationForm;
