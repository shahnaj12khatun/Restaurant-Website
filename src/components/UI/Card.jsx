import React from 'react';
import { useCart } from '../../context/CartContext';
import { Plus } from 'lucide-react';
import './Card.css';

const Card = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className="card">
            <div className="card-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{item.name}</h3>
                    <span className="price">${item.price.toFixed(2)}</span>
                </div>
                <p className="description">{item.description}</p>
                <button className="btn add-btn" onClick={() => addToCart(item)}>
                    Add to Cart <Plus size={16} />
                </button>
            </div>
        </div>
    );
};

export default Card;
