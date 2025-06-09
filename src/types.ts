// Tipos para productos
export interface Product {
    id: string;
    name: string;
    category: 'anillos' | 'aretes' | 'collares';
    price: number;
    description: string;
    image: string;
    featured?: boolean;
    materials?: string[];
    sizes?: string[];
}

// Tipos para ítems del carrito
export interface CartItem extends Product {
    quantity: number;
}

// Tipos para colecciones
export interface Collection {
    name: string;
    id: string;
    description: string;
    image: string;
}

// Tipo para las props del componente ProductCard
export type ProductCardProps = {
    product: Product;
    index?: number;
};

// Tipo para las props del componente CartSidebar
export type CartSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

// Tipo para las props del componente SectionTitle
export type SectionTitleProps = {
    title: string;
    subtitle?: string;
};
