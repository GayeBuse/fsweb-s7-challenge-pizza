import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "../Components/Product";


export default function Home(productData) {
  return (
    <div className="full">
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
      <div className="container-product">
      <Product/>
      </div>
      <div className="alt">
      <footer>
        <div className="baslık">
        <p>Teknolojik <br></br>Yemekler</p>
        </div>
        <div className="iletisim">
          <p>341 Londonderry Road,<br>
          </br>Istanbul Türkiye</p>
          <p>aciktim@teknolojikyemekler.com</p>
          <p>+90 216 123 45 67 </p>
          </div>
      </footer>
      </div>
      
    </div>
  );
}
