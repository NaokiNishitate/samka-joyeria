import React from 'react';
import ProductCard from './ProductCard';
import '../assets/css/components/product-card.css';

export default function ProductGrid({ products }) {
    return (
        <div className="row">
            {products.map((product, index) => (
                <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                    <ProductCard product={product} index={index} />
                </div>
            ))}
        </div>
    );
}