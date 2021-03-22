import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";

const Subtotal = () => {
  const [state, dispatch] = useStateValue();
  const [priceTotal, setPriceTotal] = useState(0);
  let precio = 0;

  useEffect(() => {
    state.basket.map((item) => {
      precio = precio + item.price;
    });
    
    setPriceTotal(Number(precio.toFixed(2)));
  }, [state]);
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items): <strong>${priceTotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={priceTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
