import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) =>
    state.cart.items.map((entry) => (
      <CartItem key ={entry.id}
        item={{
          id: entry.id,
          title: entry.title,
          quantity: entry.quantity,
          price: entry.price,
          total: entry.price * entry.quantity,
        }}
      />
    ))
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
