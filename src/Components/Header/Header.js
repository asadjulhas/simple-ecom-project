import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink';

const Header = () => {
  return (
    <nav className='nav_area'>
       <div className="logo_area">
         <img src={logo} alt="" />
       </div>
       <nav className="menuA-area">
         <CustomLink to="/">Home</CustomLink>
         <CustomLink to="/shop">Shop</CustomLink>
         <CustomLink to="/order">Order</CustomLink>
         <CustomLink to="/register">Register</CustomLink>
         <CustomLink to="/login">Login</CustomLink>
         
       </nav>
    </nav>
  );
};

export default Header;