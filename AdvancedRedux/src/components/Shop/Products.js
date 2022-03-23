import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Ljudi'
          price={6}
          description='This is a first product - amazing!'
          id ={1}
        />
        <ProductItem
          title='Zviri'
          price={8}
          description='This is a first product - amazing!'
          id ={2}
        />
        <ProductItem
          title='Djiboni'
          price={6}
          description='This is a first product - amazing!'
          id ={3}
        />
      </ul>
    </section>
  );
};

export default Products;
