import classes from "./CartItem.module.css";
import { cartActions } from "../../store/reduxStore";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const plusButtonHandler = () => {
    dispatch(cartActions.increaseItemNumber(id));
  };
  const minusButtonHandler = () => {
    dispatch(cartActions.decreaseItemNumber(id));
  };

  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>

      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusButtonHandler}>-</button>
          <button onClick={plusButtonHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
