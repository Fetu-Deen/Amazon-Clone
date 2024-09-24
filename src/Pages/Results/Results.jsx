import React, { useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import { useEffect } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, SetResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // console.log(results);
  const { categoryName } = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        SetResults(res.data);
        setisLoading(false);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
    setisLoading(false);
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
          <hr />
          <div className={classes.products__container}>
            {results?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderAdd={true}
                />
              );
            })}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
