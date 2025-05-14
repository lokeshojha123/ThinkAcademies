import React, { useState } from 'react';
import './NavBar.css';
// import logo from '../../assets/logopic.webp';
import underline from '../../assets/mainpic.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {/* <img src={logo} alt="" /> */}
      <h1>Think academies</h1>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')}>About</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Work</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt="" /> : null}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Us
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;