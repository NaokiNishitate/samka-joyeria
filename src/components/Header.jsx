import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import CartButton from './Cart/CartButton';
import '../assets/css/components/header.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/', exact: true },
        { name: 'Anillos', path: '/products#anillos' },
        { name: 'Aretes', path: '/products#aretes' },
        { name: 'Collares', path: '/products#collares' },
        { name: 'Colecciones', path: '/collections' }
    ];

    const isActive = (path, exact = false) => {
        return exact
            ? location.pathname === path
            : location.pathname.startsWith(path.split('#')[0]);
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <Link to="/" className="logo">
                        Samka<span>.</span>
                    </Link>

                    <nav className="desktop-nav">
                        <ul className="nav-links">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className={`nav-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
                                        onClick={() => {
                                            if (item.path.includes('#')) {
                                                setTimeout(() => {
                                                    const section = document.getElementById(item.path.split('#')[1]);
                                                    if (section) {
                                                        section.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }, 100);
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="header-actions">
                            <Link to="/account" className="icon-button" aria-label="Mi cuenta">
                                <FiUser />
                            </Link>
                            <CartButton />
                        </div>
                    </nav>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menú"
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </header>

            {/* Menú móvil */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-menu-links">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className="mobile-nav-link"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    if (item.path.includes('#')) {
                                        setTimeout(() => {
                                            const section = document.getElementById(item.path.split('#')[1]);
                                            if (section) {
                                                section.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }, 100);
                                    }
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
