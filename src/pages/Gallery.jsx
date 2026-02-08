import React from 'react';
import './Gallery.css';

const galleryImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=60", // Replaced 4th image
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=60"
];

const Gallery = () => {
    return (
        <div className="gallery-page container p-2">
            <h1 className="text-center mb-1">Our Gallery</h1>
            <p className="text-center mb-2" style={{ color: 'var(--gray)' }}>A glimpse into our atmosphere and culinary creations</p>

            <div className="gallery-grid">
                {galleryImages.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
