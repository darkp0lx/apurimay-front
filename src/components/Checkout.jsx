import React from "react";
import banner from "../assets/banner.jpg";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img src={banner} alt="" className="checkout__ad" />
      <div className="checkout__container">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
