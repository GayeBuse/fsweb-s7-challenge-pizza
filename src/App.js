import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/Home";
import OrderForm from "./Pages/OrderForm";
import Success from "./Pages/Success";


const App = () => {
  return (
    <>
    <div className="app">
      <Switch>
        <Route exact path="/">
          < Home />
        </Route>
        <Route exact path="/pizza">
          < OrderForm />
        </Route>
        <Route exact path="/success">
          < Success />
        </Route>
      </Switch>
    </div>
   
    </>
  );
};
export default App;
