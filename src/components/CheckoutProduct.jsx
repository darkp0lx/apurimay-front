import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    console.log("holaa!!");
    dispatch({
      type: "DELETE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="title__containerPrice">
          <p>costo total:</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="checkoutProduct__rating">
          <p>{rating} 🌟 </p>
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
