import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        {!hideButton && (
          <div className="checkoutProduct__button">
            <Button onClick={removeFromBasket}>Remove from Basket</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
