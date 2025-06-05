import { useState, useEffect } from 'react';

export function useCart() {
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('samka-cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    // Persistencia en localStorage
    useEffect(() => {
        localStorage.setItem('samka-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Añadir al carrito con validación de stock
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                // Validar stock máximo (ejemplo: 10 unidades)
                const newQuantity = existingItem.quantity + quantity;
                if (newQuantity > 10) {
                    alert('No puedes agregar más de 10 unidades del mismo producto');
                    return prevItems;
                }

                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            }

            return [...prevItems, { ...product, quantity }];
        });
    };

    // Eliminar producto del carrito
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    // Actualizar cantidad con validaciones
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        if (quantity > 10) {
            alert('No puedes agregar más de 10 unidades del mismo producto');
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Calcular total monetario
    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    // Contar cantidad total de items
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Vaciar carrito completamente
    const clearCart = () => {
        setCartItems([]);
    };

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
