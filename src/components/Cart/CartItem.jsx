import React, { useState } from 'react';
import '../../assets/css/components/cart.css';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value) || 1;
        setQuantity(newQuantity);
        onUpdateQuantity(item.id, newQuantity);
    };

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
            </div>

            <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p className="price">${item.price.toFixed(2)}</p>

                <div className="quantity-controls">
                    <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                    >
                        −
                    </button>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={handleQuantityChange}
                        onBlur={() => {
                            if (quantity < 1) {
                                setQuantity(1);
                                onUpdateQuantity(item.id, 1);
                            } else if (quantity > 10) {
                                setQuantity(10);
                                onUpdateQuantity(item.id, 10);
                            }
                        }}
                    />
                    <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="cart-item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
                onClick={() => onRemove(item.id)}
                className="remove-btn"
                aria-label="Eliminar producto"
            >
                &times;
            </button>
        </div>
    );
}
