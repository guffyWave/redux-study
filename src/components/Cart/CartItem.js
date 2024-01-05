import { useDispatch } from 'react-redux';
import { increment, decrement } from '../app-redux/cartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  console.log('check props.item--  ', props.item);
  const { title, quantity, total, price, id, description } = props.item;
  let dispatch = useDispatch();

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(decrement(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(increment(id));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
