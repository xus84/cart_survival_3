import React, { useState } from "react";
import "./App.css";
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);


  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove));
    };
 

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

    
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart){
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
        }
        newCart.push(itemInCart);
     /*  cart = [...cart, itemInCart]  */
    }
    setCart(newCart); /* ([...cart, { ...product}]); */
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, {quantity}) => sum + quantity,0); 
  }
    
   

  return (
    
    <div className="app">
      <header>
      <h1>MY CART <span className="number_cart">{getCartTotal()}</span><span className="icon_cart"><i class="fa fa-shopping-cart"  aria-hidden="true"></i></span><button className="gotoCart" onClick={() => navigateTo(PAGE_CART)}>Go to Cart</button>
      
      <button className="gotoBack" onClick={() => navigateTo(PAGE_PRODUCTS)}>⏪ ⏪ back</button>
      </h1> 
      </header> 
      {page === PAGE_PRODUCTS && (
        <Products addToCart={addToCart}/>
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      )} 
    </div>
  );
}

export default App;
