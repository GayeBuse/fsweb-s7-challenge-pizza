import React, { useEffect } from "react";
import "./App.css";
import OrderForm from "./Pages/OrderForm";
import { useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Header from "./Layout/Header";
import { useHistory } from "react-router-dom";

const App = () => {
  const [order, setOrder] = useState([]);
  const history = useHistory();

  const handleOrder = (order) => {
    setOrder(order); //dataya veri yolluyoruz
    history.push("/success");
  };

  useEffect(() => {
    console.log("order", order);
  }, [order]); // her sipariş değiştiğinde ekrana yazdır

  function handleSubmit(formData) {
    //datayı her sayfada kullanabilmek için
  }
  //
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <Header />
          <OrderForm handleOrder={handleOrder} handleSubmit={handleSubmit} />
        </Route>
        <Route exact path="/success">
          <Success order={order} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
