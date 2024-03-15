import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardImgOverlay,
} from "reactstrap";
export default function Home(productData) {
  return (
    <div>
      <div className="ana">
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
          <div className="altbaslık">
            <div>
              <img src="icons/1.png.png " alt="" />
              <p>YENİ! Kore</p>
            </div>
            <div>
              <img src="icons/2.png.png " alt="" />
              <p>Pizza</p>
            </div>
            <div>
              <img src="icons/3.png.png " alt="" />
              <p>Burger</p>
            </div>
            <div>
              <img src="icons/4.png.png " alt="" />
              <p>Kızartmalar</p>
            </div>
            <div>
              <img src="icons/5.png.png " alt="" />
              <p>Fast food</p>
            </div>
            <div>
              <img src="icons/6.png.png " alt="" />
              <p>Gazlı İçecekler</p>
            </div>
          </div>
          <div className="menu1">
            <Card inverse style={{ border: "0" }}>
              <CardImg src="menu/bir.png" alt="" className="absoulete" />
              <CardImgOverlay className="card-overlay">
                <CardTitle tag="h4">
                  Özel <br />
                  Lezzetus
                </CardTitle>
                <CardText className="">Position: Absolute Acı Burger</CardText>
                <Button className=" buttton">SİPARİŞ VER</Button>
              </CardImgOverlay>
            </Card>
            <div className="sag">
              <div className="or">
                <CardImg src="menu/iki.png" alt="" className="hack" />
                <CardImgOverlay className="overlay">
                  <CardTitle tag="h4" className="">
                    Hackathlon
                  </CardTitle>
                  <CardText tag="h4" className="">
                    Burger Menü
                  </CardText>
                  <Button className="buttton">SİPARİŞ VER</Button>
                </CardImgOverlay>
              </div>
              <div>
                <Card>
                  <CardImg src="menu/uc.png" alt="" className="npm" />
                  <CardImgOverlay className="cook">
                    <CardTitle tag="h4" className="">
                      <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı
                    </CardTitle>
                    <CardText tag="h4" className="">
                      npm gibi kurye
                    </CardText>
                    <Button className="buttton">SİPARİŞ VER</Button>
                  </CardImgOverlay>
                </Card>
              </div>
            </div>
          </div>
          {/*
      <div className="container-product">
        <Product />
      </div>
  */}
          <div className="">
            <div className="paket">
              <p className="">en çok paketlenen menüler</p>
              <p>Acıktıran Kodlara Doyuran Lezzetler</p>
            </div>
            <div className="ramen">
              <img src="icons/1.png.png " alt="" />
              <p>Ramen</p>
              <img src="icons/2.png.png " alt="" />
              <p>Pizza</p>

              <img src="icons/3.png.png " alt="" />
              <p>Burger</p>

              <img src="icons/4.png.png " alt="" />
              <p>French fries</p>

              <img src="icons/5.png.png " alt="" />
              <p>Fast food</p>

              <img src="icons/6.png.png " alt="" />
              <p>Soft Drinks</p>
            </div>
          </div>
          <div className="menuler">
            <div className="ar">
              <CardBody>
                <img src="menu/pizza.png" alt="" />
                <CardTitle className="menuu">Terminal Pizza </CardTitle>
                <div className="cardtext">
                  <CardText>4.9</CardText>
                  <CardText>(200)</CardText>
                  <CardText>60₺</CardText>
                </div>
              </CardBody>
            </div>
            <div className="k">
              <CardBody>
                <img src="menu/abspizza.png" alt="" />
                <CardTitle className="menuu">
                  Position Absolute Acı Pizza{" "}
                </CardTitle>
                <div className="cardtext">
                  <CardText>4.9</CardText>
                  <CardText>(928)</CardText>
                  <CardText>85₺</CardText>
                </div>
              </CardBody>
            </div>
            <div className="a">
              <CardBody>
                <img src="menu/useeffect.png" alt="" />
                <CardTitle className="menuu">
                  useEffect Tavuklu Burger
                </CardTitle>
                <div className="cardtext">
                  <CardText>4.9</CardText>
                  <CardText>(462)</CardText>
                  <CardText>75₺</CardText>
                </div>
              </CardBody>
            </div>
          </div>
          <div className="alt">
            <footer>
              <div className="baslık">
                <p>
                  Teknolojik <br></br>Yemekler
                </p>
              </div>
              <div className="iletisim">
                <p>
                  341 Londonderry Road,<br></br>Istanbul Türkiye
                </p>
                <p>aciktim@teknolojikyemekler.com</p>
                <p>+90 216 123 45 67 </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
