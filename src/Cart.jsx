import React from 'react';

export default function Cart({ cart, removeFromCart }) {
    return (
        <>
        <h3>Cart</h3>
        <div className="container">
          {cart.map((product, idx) => (
            <div className="product" key={idx}>
              <h3>{product.name}</h3>
              <h4>
                <i class="fa fa-bitcoin"></i>
                {product.cost}
              </h4>
              <img src={product.image} width="150px" height="150px" />
              <div className="button">
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}
