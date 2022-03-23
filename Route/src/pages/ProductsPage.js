import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductsPage = (props) => {
  return (
    <Fragment>
      <h1> Products page </h1>
      <ul>
        <li>
          <Link to="/products/p1">Coca-Cola</Link>
        </li>
        <li>
          <Link to="/products/p2">Pepsi</Link>
        </li>
        <li>
          <Link to="/products/p3">Taco</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
