import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/backward-button.svg';
import '../styles/Header.css';
import hamburger from '../assets/hamburger.png';

const Header = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
      <h1>CryptoCoinStats</h1>
    </div>
    <img src={hamburger} alt="menu" />
  </header>
);

export default Header;
