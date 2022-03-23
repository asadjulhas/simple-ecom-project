import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <nav className='nav_area'>
       <div className="logo_area">
         <img src={logo} alt="" />
       </div>
       <div className="menuA-area">
         <ul>
           <li><a href="#">Order</a></li>
           <li><a href="#">Order Review</a></li>
           <li><a href="#">Manage Inventody</a></li>
         </ul>
       </div>
    </nav>
  );
};

export default Header;