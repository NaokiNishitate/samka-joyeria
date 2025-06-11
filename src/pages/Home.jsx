import React from 'react';
import ProductGrid from '../components/ProductGrid';
import SectionTitle from '../components/SectionTitle';
import { products } from '../data/sampleData';
import '../assets/css/styles.css';

export default function Home() {
    const featuredProducts = products.filter(product => product.featured);

    return (
        <div className="home-page">
            <section id="featured" className="section-padding">
                <div className="container">
                    <SectionTitle
                        title="Productos Destacados"
                        subtitle="Nuestras piezas más populares"
                    />
                    <ProductGrid products={featuredProducts} />
                </div>
            </section>

            <section className="collections-section">
                <div className="container">
                    <SectionTitle
                        title="Nuestras Colecciones"
                        subtitle="Descubre nuestras líneas exclusivas"
                    />
                    <div className="row collections-grid">
                        {/* Aquí irían los componentes de colecciones */}
                    </div>
                </div>
            </section>
        </div>
    );
}
