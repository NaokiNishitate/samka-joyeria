import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { collections } from "../data/sampleData";
import '../assets/css/styles.css';

export default function Collections() {
    return (
        <div className="collections-page">
            <div className="container">
                <SectionTitle
                    title="Nuestras Colecciones"
                    subtitle="Descubre nuestras líneas exclusivas"
                />

                <div className="collections-grid">
                    {collections.map(collection => {
                        <div key={collection.id} className="collection-card">
                            <Link to={`/products#${collection.id}`}>
                                <div className="collection-image">
                                    <img
                                        src={collection.image}
                                        alt={collection.name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="collection-info">
                                    <h3>{collection.name}</h3>
                                    <p>{collection.description}</p>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}
