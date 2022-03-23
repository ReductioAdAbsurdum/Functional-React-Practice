import React from "react";

const cartContextDefault = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(cartContextDefault);

export default CartContext;
