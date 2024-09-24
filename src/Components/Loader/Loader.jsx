import React from "react";
import { PropagateLoader } from "react-spinners";

function Loader() {
  return (
    <>
      <PropagateLoader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      />
    </>
  );
}

export default Loader;
