import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
    return (
    <div className="home-page">
    <h1>Teknolojik Yemekler</h1>
    <div className="home-text">
      <h2> KOD ACIKTIRIR</h2>
      <h2> PİZZA, DOYURUR</h2>
      <Link to="/pizza">
        <button className="order-pizza">ACIKTIM</button>
      </Link>
    </div>
  </div>
    )
}