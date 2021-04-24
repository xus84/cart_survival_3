import React, { useState } from 'react';

export default function Products({ addToCart }){
    const [products] = useState([
        {
          name: "Survival knife",
          cost: 0.000001499,
          image:
            "https://cdn-s3.touchofmodern.com/products/000/704/624/02eb1b3935aa6c30aab808357391fb7d_large.jpg?1495500637",
        },
        {
          name: "Survival Canteen",
          cost: 0.0000001,
          image: "https://images.ontheedgebrands.com/images/A12-PF52060.jpg",
        },
        {
          name: "Survival Bag Pack",
          cost: 0.0000025,
          image:
            "https://www.thebushcraftstore.co.uk/ekmps/shops/bduimportsltd/images/survival-store-s-small-survival-kit-[3]-9448-p.jpg",
        },
      ]);

    

    return (
        <>
      <div className="container">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>
              <i class="fa fa-bitcoin"></i>
              {product.cost}
            </h4>
            <img src={product.image} width="150px" height="150px" />
            <div className="button">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
    )
}
