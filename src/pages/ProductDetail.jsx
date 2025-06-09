import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/sampleData';
import { useCart } from '../hooks/useCart';
import '../assets/css/styles.css';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">Producto no encontrado</div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de ${product.name} añadida(s) al carrito`);
    };

    return (
        <div className="product-detail-page">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-gallery">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="main-image img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-price">${product.price.toFixed(2)}</p>

                        <div className="quantity-selector mb-4">
                            <label htmlFor="quantity">Cantidad:</label>
                            <div className="quantity-controls">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    disabled={quantity <= 1}
                                >
                                    −
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    max="10"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                                />
                                <button
                                    onClick={() => setQuantity(q => Math.min(10, q + 1))}
                                    disabled={quantity >= 10}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="btn btn-primary btn-lg btn-add-to-cart"
                        >
                            Añadir al carrito
                        </button>

                        <div className="product-meta mb-4">
                            {/* ... información adicional del producto ... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}