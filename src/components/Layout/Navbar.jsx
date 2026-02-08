import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { totalItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    Gourmet<span>Haven</span>
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X color="white" /> : <MenuIcon color="white" />}
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/cart" className="cart-icon" onClick={toggleMenu}>
                            <ShoppingCart size={24} />
                            {totalItems > 0 && <span className="badge">{totalItems}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
