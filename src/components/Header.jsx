import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <img
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <Link className="header__option__button" to="/login">
            <p className="header__optionLineOne">Hello Guess</p>
            <p className="header__optionLineTwo">Sign In</p>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineOne">Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
