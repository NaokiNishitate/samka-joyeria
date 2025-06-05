import React from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';
import '../../assets/css/components/cart.css';

export default function CartSidebar({ isOpen, onClose }) {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        clearCart,
        hasItems
    } = useCart();

    const handleCheckout = () => {
        // Lógica de pago (simulada)
        alert(`Compra realizada por $${cartTotal.toFixed(2)}`);
        clearCart();
        onClose();
    };

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-overlay" onClick={onClose}></div>

            <div className="cart-content">
                <div className="cart-header">
                    <h3>Tu Carrito ({cartCount} {cartCount === 1 ? 'item' : 'items'})</h3>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="cart-body">
                    {hasItems ? (
                        <>
                            <ul className="cart-items-list">
                                {cartItems.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={updateQuantity}
                                        onRemove={removeFromCart}
                                    />
                                ))}
                            </ul>
                            <button
                                onClick={clearCart}
                                className="clear-cart-btn"
                            >
                                Vaciar carrito
                            </button>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío</p>
                            <button
                                onClick={onClose}
                                className="continue-shopping-btn"
                            >
                                Seguir comprando
                            </button>
                        </div>
                    )}
                </div>

                {hasItems && (
                    <div className="cart-footer">
                        <div className="cart-summary">
                            <div className="cart-total">
                                <span>Subtotal:</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="cart-shipping">
                                <span>Envío:</span>
                                <span>Gratis</span>
                            </div>
                            <div className="cart-grand-total">
                                <span>Total:</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="checkout-btn"
                        >
                            Proceder al pago
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
