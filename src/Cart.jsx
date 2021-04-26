import React from "react";
import "./Cart.css";

export default function Cart({ cart, clearCart, removeFromCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  return (
    <>
      <h3>Cart</h3>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="container">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <div className="quantity">
              
                <h4>
                  <i class="fa fa-bitcoin"></i>
                  {product.cost}
                </h4>
                <div className="qty">
                <h4>Qty:{product.quantity}</h4>
                </div>
            </div>

            <img src={product.image} width="150px" height="150px" />
            <div className="button">
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        Total:{" "}
        <span className="bitcoin">
          <i class="fa fa-bitcoin"></i>
          {getTotalSum()}
        </span>
      </div>
    </>
  );
}
