import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  let cartItems = useSelector((state) => state.cart.items);
  //console.log("check cartItems -- ",cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <h1>CartItem Size : {cartItems.length}</h1>

      {cartItems.map((cartItem) => (
        <CartItem
          item={{
            title: cartItem.title,
            quantity: cartItem.quantity,
            total: cartItem?.price * cartItem.quantity,
            price: cartItem?.price || 0,
            description: cartItem?.description,
            id: cartItem.id,
          }}
        />
      ))}
    </Card>
  );
};

export default Cart;
