import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import CollectionsGrid from '../components/CollectionsGrid';
import SectionTitle from '../components/SectionTitle';
import { products, collections } from '../data/sampleData';
import '../assets/css/styles.css';

export default function Products() {
    const location = useLocation();
    const ringsRef = useRef(null);
    const earringsRef = useRef(null);
    const necklacesRef = useRef(null);

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        const scrollToRef = {
            'anillos': ringsRef,
            'aretes': earringsRef,
            'collares': necklacesRef
        }[hash];

        if (scrollToRef?.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="products-page">
            <div className="container">
                <SectionTitle
                    title="Nuestros Productos"
                    subtitle="Explora nuestra colección completa"
                />

                {/* Sección de Colecciones */}
                <section className="section-padding">
                    <h2 className="section-subtitle">Nuestras Colecciones</h2>
                    <CollectionsGrid collections={collections} variant="compact" />
                </section>

                {/* Secciones de productos por categoría */}
                <section ref={ringsRef} className="product-category">
                    <h2 className="category-title">Anillos</h2>
                    <ProductGrid products={products.filter(p => p.category === 'anillos')} />
                </section>

                <section ref={earringsRef} className="product-category bg-light">
                    <h2 className="category-title">Aretes</h2>
                    <ProductGrid products={products.filter(p => p.category === 'aretes')} />
                </section>

                <section ref={necklacesRef} className="product-category">
                    <h2 className="category-title">Collares</h2>
                    <ProductGrid products={products.filter(p => p.category === 'collares')} />
                </section>
            </div>
        </div>
    );
}
