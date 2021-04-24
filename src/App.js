import React, { useState } from "react";
import "./App.css";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

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

  const addToCart = (product) => {
   
    setCart([...cart, { ...product}]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove));
    };
 

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () => (
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
  );
    
  

   const renderCart = () => ( 
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
  );
    
   

  return (
    
    <div className="app">
      <header>
      <h1>MY CART <span className="number_cart">{cart.length}</span><span className="icon_cart"><i class="fa fa-shopping-cart"  aria-hidden="true"></i></span><button className="gotoCart" onClick={() => navigateTo(PAGE_CART)}>Go to Cart</button>
      
      <button className="gotoBack" onClick={() => navigateTo(PAGE_PRODUCTS)}>⏪ ⏪ back</button>
      </h1> 
      </header> 
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()} 
    </div>
  );
}

export default App;
