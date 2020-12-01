import React from "react";
import ReactDOM from "react-dom";
import {ProductSelection} from "./widgets"

export * from "./widgets";

ReactDOM.render(
  <ProductSelection products={"777"} />,
  document.getElementById("root")
);


const ffEshopWidgets = (window.ffEshopWidgets = window.ffEshopWidgets || {});

ffEshopWidgets.ProductSelection = (
  element,
  products
) => {
  ReactDOM.render(
    <ProductSelection products={products} />,
    element
  );
};