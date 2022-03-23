import classes from "./NoQuotesFound.module.css";
import { Link } from "react-router-dom";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No Quote found!</p>
      <Link to={"/new-quote"} className="btn" >
      Add a quote </Link >
    </div>
  );
};

export default NoQuotesFound;
