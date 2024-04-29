import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {

  return (
    <>
    <div className="Header">
      <nav>
        <Link disabled={true} className="link" to="/">Accueil</Link>
        <Link disabled={true} className="link" to="music">Musique</Link>
        
        <Link disabled={true} className="link" to="/"><img src="./favicon.png" className="tinyLogo" alt="logo" /></Link>
        <Link disabled={true} className="link" to="technic">Technique</Link>
        <Link disabled={true} className="link" to="athlete">Athlètes</Link>
      </nav>
      
    </div>
    <Outlet />
    </>
    
  );
}

export default Header;