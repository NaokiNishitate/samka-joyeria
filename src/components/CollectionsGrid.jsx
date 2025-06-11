import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/collections.css';

export default function CollectionsGrid({ collections, variant = 'default' }) {
    return (
        <div className={`collections-grid ${variant}`}>
            {collections.map(collection => (
                <div key={collection.id} className="collection-card">
                    <Link to={`/products#${collection.id}`} className="collection-link">
                        <div className="collection-image-container">
                            <img
                                src={collection.image}
                                alt={collection.name}
                                className="collection-image"
                                loading="lazy"
                            />
                            <div className="collection-overlay"></div>
                        </div>
                        <div className="collection-info">
                            <h3 className="collection-name">{collection.name}</h3>
                            <p className="collection-description">{collection.description}</p>
                            <span className="collection-cta">Ver colección</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
