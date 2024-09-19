import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={classes.products__container}>
      {products.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
}

export default Product;
