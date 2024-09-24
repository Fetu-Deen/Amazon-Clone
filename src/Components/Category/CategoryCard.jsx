import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ categoryData }) {
  // console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${categoryData.name}`}>
        <span>
          <h2>{categoryData.title}</h2>
        </span>
        <img src={categoryData.imgLink} alt="Category Image" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
