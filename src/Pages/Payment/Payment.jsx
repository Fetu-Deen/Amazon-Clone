import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();

  const [{ basket, user }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);

  const handleChange = (e) => {
    // console.log(e)
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  return (
    <div>
      <LayOut>
        {/* Header */}
        <div className={classes.payment__header}>
          Checkout ({totalItem}) items
        </div>
        <section className={classes.payment}>
          {/* address */}
          <div className={classes.flex}>
            <h3>Delivery Address:</h3>
            <div>
              <h5>{user?.email}</h5>
              <h5>123 React Lane</h5>
              <h5>Cambridge</h5>
              <h5>Massachusets</h5>
            </div>
          </div>
          <hr />
          {/* product */}
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              {basket?.map((item) => (
                <ProductCard product={item} flex={true} />
              ))}
            </div>
          </div>
          <hr />
          {/* Card form */}
          <div className={classes.flex}>
            <h3>Payment Methods</h3>
            <div className={classes.payment__card__container}>
              <div className={classes.payment__details}>
                <form action="">
                  {/* error */}
                  {cardError && (
                    <small style={{ color: "red" }}>{cardError}</small>
                  )}
                  {/* card element */}
                  <CardElement onChange={handleChange} />
                  {/* price */}
                  <div className={classes.payment_price}>
                    <div>
                      <span style={{ display: "flex" , gap:"10px"}}>
                        <p>Total Order |</p> <CurrencyFormat amount={total} />
                      </span>
                    </div>
                    <button>Pay Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </LayOut>
    </div>
  );
}

export default Payment;
