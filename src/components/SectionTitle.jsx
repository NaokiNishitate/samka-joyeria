import React from 'react';
import '../assets/css/styles.css'; // Ruta corregida (eliminamos un ../)

export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="section-title text-center mb-5">
            <h2>{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <div className="divider">
                <span></span>
                <i className="fas fa-gem"></i>
                <span></span>
            </div>
        </div>
    );
}
