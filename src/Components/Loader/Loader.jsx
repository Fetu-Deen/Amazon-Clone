import React from "react";
import { PropagateLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <PropagateLoader />
    </div>
  );
}

export default Loader;
