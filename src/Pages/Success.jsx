import React from "react";
import "./Success.css";

export default function Success({ order }) {
  return (
    <div className="success">
      <h1>Teknolojik Yemekler</h1>
      <div className="text">
        <p className="siparis">SİPARİŞ ALINDI</p>
        <p></p>
        <div className="orderozet">
          <p>Boyut: {order.size}</p>
          <p>Hamur: {order.dough}</p>
          <p>Ek Malzemeler: {order.extraIngredient}</p>
          <br></br>
          <p>Toplam Fiyat: {order.totalPrice}₺</p>
        </div>
      </div>
    </div>
  );
}
