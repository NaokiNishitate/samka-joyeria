import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';
import '../assets/css/components/product-card.css';

export default function ProductCard({ product, index }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image">
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
                <button className="wishlist-btn">
                    <FiHeart />
                </button>
            </div>
            <div className="product-info">
                <Link to={`/products/${product.id}`}>
                    <h3>{product.name}</h3>
                    <span className="category">{product.category}</span>
                </Link>
                <span className="price">${product.price.toFixed(2)}</span>
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                >
                    <FiShoppingBag /> Añadir al carrito
                </button>
            </div>
        </div>
    );
}
