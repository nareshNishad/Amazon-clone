import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  function randomString(length) {
    return Math.round(
      Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
    )
      .toString(36)
      .slice(1);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let paymentIntent = {
      id: randomString(15),
      amount: basket?.reduce((a, item) => a + item.price, 0),
    };
    db.collection("users")
      .doc("" + user?.uid)
      .collection("orders")
      .doc("" + paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: new Date(),
      });

    dispatch({
      type: "EMPTY_BASKET",
    });

    history.replace("/orders");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Housing Coleny</p>
            <p>Alwar, RJ</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={basket?.reduce((a, item) => a + item.price, 0)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button>
                  <span>Buy Now"</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
