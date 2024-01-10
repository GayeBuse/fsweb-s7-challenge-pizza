import React from "react";
import { productData } from "../Datas/ProductData";
import "./Product.css";

const Product = () => {
  return (
    <>
      {productData.map((urun, i) => (
        <div className="product-container" key={i}>
          <h3>{urun.title}</h3>
          <div className="product-props">
            <p id="price">
              <b>{urun.price}₺</b>
            </p>
            <p id="rate">{urun.rate}</p>
            <p>({urun.comment})</p>
          </div>
          <p>{urun.description}</p>
        </div>
      ))}
    </>
  );
};

export default Product;