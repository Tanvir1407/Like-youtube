import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Loading() {
  let [color] = useState("#ffffff");
  return (
    <div className="w-screen h-screen">
      <div className="sweet-loading ">
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
