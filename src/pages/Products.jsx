import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import SectionTitle from '../components/SectionTitle';
import { products } from '../data/sampleData';
import '../assets/css/styles.css';

export default function Products() {
  const location = useLocation();
  const ringsRef = useRef(null);
  const earringsRef = useRef(null);
  const necklacesRef = useRef(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    let targetRef = null;

    if (hash === 'anillos') targetRef = ringsRef;
    else if (hash === 'aretes') targetRef = earringsRef;
    else if (hash === 'collares') targetRef = necklacesRef;

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.scrollBy({ top: -90, behavior: 'smooth' });
      }, 350);
    }
  }, [location]);

  return (
    <div className="products-page">
      <div className="container">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Explora nuestra colección completa"
        />

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
