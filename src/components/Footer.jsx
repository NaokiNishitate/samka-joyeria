import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiMail, FiPhone } from 'react-icons/fi';
import '../assets/css/styles.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: <FiInstagram />, url: 'https://instagram.com/samkajoyeria' },
        { icon: <FiFacebook />, url: 'https://facebook.com/samkajoyeria' }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Columna 1 */}
                    <div className="footer-column">
                        <h3 className="footer-logo">Samka<span>.</span></h3>
                        <p className="footer-description">
                            Joyería artesanal moderna y elegante para mujeres jóvenes.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2 */}
                    <div className="footer-column">
                        <h4 className="footer-title">Explorar</h4>
                        <ul className="footer-links">
                            <li><Link to="/products">Todos los productos</Link></li>
                            <li><Link to="/products#anillos">Anillos</Link></li>
                            <li><Link to="/products#aretes">Aretes</Link></li>
                            <li><Link to="/products#collares">Collares</Link></li>
                            <li><Link to="/collections">Colecciones</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                    <div className="footer-column">
                        <h4 className="footer-title">Ayuda</h4>
                        <ul className="footer-links">
                            <li><Link to="/faq">Preguntas frecuentes</Link></li>
                            <li><Link to="/shipping">Envíos y devoluciones</Link></li>
                            <li><Link to="/sizing">Guía de tallas</Link></li>
                            <li><Link to="/care">Cuidado de joyas</Link></li>
                        </ul>
                    </div>

                    {/* Columna 4 */}
                    <div className="footer-column">
                        <h4 className="footer-title">Contacto</h4>
                        <div className="contact-info">
                            <a href="mailto:contacto@samka.com" className="contact-link">
                                <FiMail /> contacto@samka.com
                            </a>
                            <a href="tel:+56912345678" className="contact-link">
                                <FiPhone /> +56 9 1234 5678
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Samka Joyería. Todos los derechos reservados.</p>
                    <div className="legal-links">
                        <Link to="/terms">Términos y condiciones</Link>
                        <Link to="/privacy">Política de privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
