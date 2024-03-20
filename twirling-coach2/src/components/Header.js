import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {

  const [isDisplayed, setIsDisplayed] = useState(false);

function handleClick() {
  setIsDisplayed(!isDisplayed);
}



  return (
    <>
    <div className="Header">
      <nav>
        <Link className="link" to="/">Accueil</Link>
        <Link className="link" to="music">Musique</Link>
        
        <Link className="link" to="/"><img src="/favicon.png" className="tinyLogo" alt="logo" /></Link>
        <Link className="link" to="technic">Technique</Link>
        <Link className="link" to="athlete">Athlètes</Link>
      </nav>
      
    </div>
    <Outlet />
    </>
    
  );
}

export default Header;