import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Air Blower'
          price={6}
          id={1}
          description='Dry your hair '
        />
         <ProductItem
          title='Apple'
          price={2}
          id={2}
          description='Eat apple and stay healthy'
        />
         <ProductItem
          title='Water'
          price={1}
          id={3}
          description='Drink water and stay hydrated'
        />
      </ul>
    </section>
  );
};

export default Products;
