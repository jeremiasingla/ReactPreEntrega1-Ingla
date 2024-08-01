import React from "react";
import CartWidget from "./CartWidget.jsx";
import ItemListContainer from "./ItemListContainer.jsx";

const Navbar = () => {
  return (
    <header className="header header__overlay">
      <nav className="header__navbar">
        <div className="header__navbar--items">
          <div className="header__logo">
            <a href="#">
              <img src="../../public/logo.webp" alt="HellStar" />
            </a>
          </div>
          <ul>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Shop
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
      <ItemListContainer greeting="⋆ The Path to Paradise ⋆" />
    </header>
  );
};

export default Navbar;
