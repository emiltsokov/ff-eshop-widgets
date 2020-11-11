import React from "react";
import SelectionAside from "./SelectionAside";

export const InterfaceContext = React.createContext({
  data: {
    products: [],
    totalPrice: 0
  },
  products: 0,
  onSelectionUpdate: (products) => {}
});

export const ProductSelection = (params) => {
  return (
    <InterfaceContext.Provider value={params}>
      <SelectionAside />
    </InterfaceContext.Provider>
  );
};
