import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <>
    <div className="Footer">
      <div className='FooterContainer'>
        <nav className='FooterArea'>
          <Link to="/"><img src="/home.png" className="icon" alt="home icon" /></Link>
          <Link to="music"><img src="/music.png" className="icon" alt="music icon" /></Link>
          <Link to="technic"><img src="/technic.png" className="icon" alt="technic icon" /></Link>
          <Link to="athlete"><img src="/list.png" className="icon" alt="list icon" /></Link>
        </nav>
      </div>
      
    </div>
    </>
    
  );
}

export default Header;