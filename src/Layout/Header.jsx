import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Teknolojik Yemekler</h1>
        <nav className="navbar">
          <Link to="/">Anasayfa -</Link>
          <b>Siparis Olustur</b>
        </nav>
      </header>
    </div>
  );
};

export default Header;
