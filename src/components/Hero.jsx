import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import '../assets/css/styles.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Joyería artesanal moderna y elegante</h1>
                    <p>Diseños exclusivos para mujeres jóvenes que buscan elegancia y estilo.</p>
                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-primary">
                            Ver colección
                        </Link>
                        <Link to="/products#nuevo" className="btn btn-outline">
                            Nuevas llegadas
                        </Link>
                    </div>
                    <a href="#featured" className="scroll-down">
                        <FiChevronDown />
                    </a>
                </div>
            </div>
        </section>
    );
}
