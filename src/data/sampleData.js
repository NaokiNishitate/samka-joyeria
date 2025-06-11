export const products = [
    {
        id: '1',
        name: 'Anillo Dorado Minimalista',
        category: 'anillos',
        price: 45.00,
        description: 'Anillo dorado con diseño minimalista para uso diario. Fabricado en oro de 18k con acabado brillante.',
        image: '/images/ring1.png',
        featured: true,
        materials: ['Oro 18k', 'Aleación hipoalergénica'],
        sizes: ['16', '17', '18', '19']
    },
    {
        id: '2',
        name: 'Anillo con Piedra Natural',
        category: 'anillos',
        price: 60.00,
        description: 'Anillo con piedra natural auténtica y acabado en oro. Disponible en diferentes tipos de piedras.',
        image: '/images/ring2.png',
        featured: true,
        materials: ['Oro 14k', 'Piedra natural'],
        sizes: ['15', '16', '17', '18']
    },
    {
        id: '3',
        name: 'Aretes de Perlas',
        category: 'aretes',
        price: 35.00,
        description: 'Aretes elegantes con perlas naturales cultivadas. Ideal para ocasiones especiales.',
        image: '/images/earring1.png',
        featured: true,
        materials: ['Perla cultivada', 'Oro 14k'],
        sizes: ['Único']
    },
    {
        id: '4',
        name: 'Aretes Geométricos',
        category: 'aretes',
        price: 40.00,
        description: 'Aretes con diseño geométrico moderno. Fabricados en plata esterlina con baño de oro.',
        image: '/images/earring2.png',
        featured: false,
        materials: ['Plata esterlina', 'Baño de oro'],
        sizes: ['Único']
    },
    {
        id: '5',
        name: 'Collar Doble Capa',
        category: 'collares',
        price: 70.00,
        description: 'Collar de doble capa con detalles en dorado. Longitud ajustable entre 40cm y 45cm.',
        image: '/images/necklace1.png',
        featured: true,
        materials: ['Oro 14k', 'Cadena italiana'],
        sizes: ['40-45cm']
    },
    {
        id: '6',
        name: 'Collar con Colgante',
        category: 'collares',
        price: 80.00,
        description: 'Collar con colgante de piedra semipreciosa. Disponible en diferentes tipos de piedras.',
        image: '/images/necklace2.png',
        featured: false,
        materials: ['Plata esterlina', 'Piedra semipreciosa'],
        sizes: ['45cm']
    }
];

export const collections = [
    {
        name: 'Anillos',
        id: 'anillos',
        description: 'Diseños únicos para cada ocasión',
        image: '/images/rings-collection.jpg'
    },
    {
        name: 'Aretes',
        id: 'aretes',
        description: 'Elegancia en cada detalle',
        image: '/images/earrings-collection.jpg'
    },
    {
        name: 'Collares',
        id: 'collares',
        description: 'Piezas que destacan tu estilo',
        image: '/images/necklaces-collection.jpg'
    }
];
