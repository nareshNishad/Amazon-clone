import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./payment/Payment";
import Orders from "./orders/orders";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER is", authUser);
      if (authUser) {
        // the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
