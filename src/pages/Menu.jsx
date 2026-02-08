import React, { useState } from 'react';
import { menuData, categories } from '../data/menuData';
import Card from '../components/UI/Card';
import './Menu.css';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems = selectedCategory === "All"
        ? menuData
        : menuData.filter(item => item.category === selectedCategory);

    return (
        <div className="menu-page container p-2">
            <h1 className="text-center">Our Menu</h1>
            <p className="text-center mb-1">Delicious dishes prepared with love</p>

            <div className="category-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`btn ${selectedCategory === category ? '' : 'btn-outline'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="menu-grid">
                {filteredItems.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
