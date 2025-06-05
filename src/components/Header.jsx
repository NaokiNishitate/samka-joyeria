import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import CartButton from './Cart/CartButton';
import '../assets/css/components/header.css';

const navItems = [
    { name: 'Inicio', path: '/', section: 'hero' },
    { name: 'Anillos', path: '/products', section: 'anillos' },
    { name: 'Aretes', path: '/products', section: 'aretes' },
    { name: 'Collares', path: '/products', section: 'collares' },
    { name: 'Colecciones', path: '/', section: 'colecciones' }
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    // Scroll suave a secciones
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
        }
    };

    // Actualizar sección activa al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'colecciones', 'anillos', 'aretes', 'collares'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo" onClick={() => scrollToSection('hero')}>
                    Samka
                </Link>

                <nav className="desktop-nav">
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.path === '/' ? (
                                    <button
                                        onClick={() => scrollToSection(item.section)}
                                        className={activeSection === item.section ? 'active' : ''}
                                    >
                                        {item.name}
                                    </button>
                                ) : (
                                    <Link
                                        to={`${item.path}#${item.section}`}
                                        className={activeSection === item.section ? 'active' : ''}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <CartButton />
                        </li>
                    </ul>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-menu-links">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.path === '/' ? (
                                    <button
                                        onClick={() => {
                                            scrollToSection(item.section);
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                ) : (
                                    <Link
                                        to={`${item.path}#${item.section}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
