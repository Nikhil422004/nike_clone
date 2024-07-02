import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import "./CartFav.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleDel = (product) => {
    dispatch(delCart(product));
  };

  const emptyCart = () => {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      <div className="cart-item" key={product.articleNo}>
        <div className="cart-item-image">
          <img src={product.imageUrl} alt={product.productName} />
        </div>
        <div className="cart-item-details">
          <h3>{product.productName}</h3>
          <p>${product.salePrice ? product.salePrice : product.listPrice}</p>
          <div className="cart-item-actions">
            <button onClick={() => handleDel(product)} className="btns">
              -
            </button>
            <span>{product.qty}</span>
            <button onClick={() => handleAdd(product)} className="btns">
              +
            </button>
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className="checkout-button">
        <button className="btns">Proceed to Checkout</button>
      </div>
    );
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
      </div>
      {state.length !== 0 && checkoutButton()}
    </>
  );
};

export default Cart;
