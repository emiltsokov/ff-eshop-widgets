import React, { useContext } from "react";
import { InterfaceContext } from "./index";

const SelectionAside = () => {
  const context = useContext(InterfaceContext);

  return <div>Selected products {context.products} </div>;
};

export default SelectionAside;
