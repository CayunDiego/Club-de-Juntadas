/* src/components/Layout.js */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss';
import logo from '../assets/club_de_juntadas_logo.png';


const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <div className='logo-container'>
          <Link to="/Club-de-Juntadas/">
            <img src={logo} alt="Logo de la Marca" className="logo" />
          </Link>
        </div>
        <nav className="navbar">
          <Link 
            to="/Club-de-Juntadas/" 
            className={location.pathname === '/Club-de-Juntadas/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/Club-de-Juntadas/designs" 
            className={location.pathname === '/Club-de-Juntadas/designs' ? 'active' : ''}
          >
            Diseños
          </Link>
        </nav>
      </header>
      <main className='main-container'>{children}</main>
      <footer>
        <p>Creado con amor ❤️</p>
      </footer>
    </div>
  );
};

export default Layout;
