import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ product, flex, detailDesc }) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {detailDesc && <div style={{ maxWidth: "750px" }}>{description} </div>}
        <div className={classes.rating}>
          {/* Rating */}
          <Rating
            name="read-only"
            value={rating?.rate}
            precision={0.1}
            readOnly
          />
          {/*count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
