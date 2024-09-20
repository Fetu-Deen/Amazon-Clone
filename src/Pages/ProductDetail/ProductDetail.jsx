import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../API/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res);
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          detailDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
