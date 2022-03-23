import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/reduxStore';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemNumber = useSelector(state => state.cart.items.length)

  const onClickHandler = ()=>{
    dispatch(cartActions.togleCart())
  }
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>Cart</span>
      <span className={classes.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default CartButton;
