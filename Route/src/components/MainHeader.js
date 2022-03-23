import { NavLink } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
