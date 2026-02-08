import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData'; // Import menuData source of truth
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page container p-2 text-center">
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/menu" className="btn mt-1">Browse Menu</Link>
            </div>
        );
    }

    // Helper to get latest item details
    const getLatestItemDetails = (cartItem) => {
        const freshItem = menuData.find(d => d.id === cartItem.id);
        return freshItem ? { ...freshItem, quantity: cartItem.quantity } : cartItem;
    };

    return (
        <div className="cart-page container p-2">
            <h2 className="text-center mb-1">Your Cart</h2>

            <div className="cart-items">
                {cartItems.map((cartItem) => {
                    const item = getLatestItemDetails(cartItem);
                    return (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://placehold.co/100x100?text=No+Image'} />
                            </div>
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => updateQuantity(item.id, -1)} className="qty-btn"><Minus size={16} /></button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="qty-btn"><Plus size={16} /></button>
                            </div>
                            <div className="item-total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                <Trash2 size={20} />
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="cart-summary">
                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-actions">
                    <button className="btn btn-outline" onClick={clearCart}>Clear Cart</button>
                    <button className="btn" onClick={() => alert("Checkout functionality coming soon!")}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
