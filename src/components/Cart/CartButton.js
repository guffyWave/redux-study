import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleState } from '../app-redux/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(toggleState());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
