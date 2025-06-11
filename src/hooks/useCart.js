import { useState, useEffect, useCallback, use } from 'react';

export function useCart() {
    const [cartItems, setCartItems] = useState([]);

    // Cargar carrito desde localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('samka-cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error parsing cart data:', error);
                localStorage.removeItem('samka-cart');
            }
        }
    }, []);

    // Guardar en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem('samka-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product, quantity = 1) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                // Validar stock máximo
                const newQuantity = existingItem.quantity + quantity;
                if (newQuantity > 10) {
                    alert('Límite de 10 unidades por producto');
                    return prev;
                }

                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            }

            return [...prev, { ...product, quantity }];
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    }, []);

    const updateQuantity = useCallback((productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        if (quantity > 10) {
            alert('Límite de 10 unidades por producto');
            return;
        }

        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }, [removeFromCart]);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        hasItems: cartItems.length > 0
    };
}
