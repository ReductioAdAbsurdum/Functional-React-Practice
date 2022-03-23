import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((count, item) => {
    return (count += item.amount);
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge"> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
