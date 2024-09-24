import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { type } from "../../Utility/action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET,
      id,
    });
  };

  // How reducer work:
  // let a=[4,5,6]
  // let result = a.reduce((previous,current)=>{
  //   return previous + current
  // },0) ...starts from 0
  // console.log(result) // 4+5+6

  return (
    <>
      <LayOut>
        <section className={classes.container}>
          <div className={classes.cart__container}>
            <h2>Hello!</h2>
            <h3>Your Shopping Basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <h3>Oops! No item in your cart</h3>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={classes.cart__product}>
                    <ProductCard
                      key={i}
                      product={item}
                      detailDesc={true}
                      flex={true}
                      renderAdd={false}
                    />
                    <div className={classes.btn__container}>
                      <button onClick={() => increment(item)}>
                        <IoIosArrowUp size={20} />
                      </button>
                      <span>{item.amount}</span>
                      <button onClick={() => decrement(item.id)}>
                        <IoIosArrowDown size={20} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>

          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal:({basket.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift </small>
              </span>
              <Link to="/payments">Continue to Payment</Link>
            </div>
          )}
        </section>
      </LayOut>
    </>
  );
}

export default Cart;
