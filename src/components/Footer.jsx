import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="footer-logo">Samka</h3>
                        <p>Joyería artesanal moderna y elegante para mujeres jóvenes.</p>
                    </div>

                    <div className="col-md-4">
                        <h4>Enlaces rápidos</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/products">Productos</Link></li>
                            <li><Link to="/products#anillos">Anillos</Link></li>
                            <li><Link to="/products#aretes">Aretes</Link></li>
                            <li><Link to="/products#collares">Collares</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h4>Contacto</h4>
                        <p>contacto@samka.com</p>
                        <p>+56 9 1234 5678</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Samka. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
