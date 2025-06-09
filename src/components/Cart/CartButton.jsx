import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import '../../assets/css/components/cart.css';

export default function CartButton({ mobile = false }) {
    const { cartCount } = useCart();

    return (
        <div className={`cart-button ${mobile ? 'mobile' : ''}`}>
            <FiShoppingCart className="cart-icon" />
            {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
            )}
        </div>
    );
}
