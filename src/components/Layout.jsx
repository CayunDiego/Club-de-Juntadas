/* src/components/Layout.js */
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';
import logo from '../assets/club_de_juntadas_logo.png';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className='logo-container'>
          <img src={logo} alt="Logo de la Marca" className="logo" />
        </div>
        <nav className="navbar">
          <Link to="/Club-de-Juntadas/">Home</Link>
          <Link to="/Club-de-Juntadas/designs">Diseños</Link>
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
