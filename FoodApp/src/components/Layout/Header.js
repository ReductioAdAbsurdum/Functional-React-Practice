import React from "react";
import { Fragment } from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Mama's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Alt img prop" />
      </div>
    </Fragment>
  );
};

export default Header;
