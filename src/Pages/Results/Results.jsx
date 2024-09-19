import React, { useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import { useEffect } from "react";
import ProductCard from "../../Components/Product/ProductCard";
function Results() {
  const [results, SetResults] = useState([]);
  console.log(results);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        SetResults(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <LayOut>
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
          <hr />

          <div className={classes.products__container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      </LayOut>
    </div>
  );
}

export default Results;

// import React, { useEffect, useState } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import axios from "axios";
// import { productUrl } from "../../API/endPoints";
// import { useParams } from "react-router-dom";
// import classes from "./Results.module.css";
// import ProductCard from "../../Components/Product/ProductCard";
// function Results() {
//   const [results, SetResults] = useState([]);
//   const { categoryName } = useParams();
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         SetResults(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
//         <hr />

//         <div className={classes.products__container}>
//           {results?.map((product) => {
//             return <ProductCard key={product.id} product={product} />;
//           })}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;

// import React, { useEffect, useState } from "react"; // Combined imports
// import classes from "./Results.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../API/endPoints"; // Ensure correct path and casing
// import ProductCard from "../../Components/Product/ProductCard";

// function Results() {
//   const [results, setResults] = useState([]); // Changed SetResults to setResults
//   const { categoryName } = useParams();

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//         console.log(res.data); // Uncommented for debugging
//       })
//       .catch((err) => console.log(err));
//   }, []); // Added categoryName to dependency array

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
//         <hr />
//         <div className={classes.products__container}>
//           {results.map(
//             (
//               product // Removed optional chaining
//             ) => (
//               <ProductCard key={product.id} product={product} />
//             )
//           )}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;
