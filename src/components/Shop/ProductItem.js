import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../app-redux/cartSlice";

const ProductItem = (props) => {
  const { title, price, description,id,quantity } = props;
  const dispatch=useDispatch();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>{
            dispatch(addToCart({
              title, price, id,description,quantity:1
            }))
          ///  alert('Clicked '+ title)
            }}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
