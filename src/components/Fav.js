import { useSelector, useDispatch } from "react-redux";
import { addFav, delFav } from "../redux/action";
// import "./Cart.css";

const Fav = () => {
  const state = useSelector((state) => state.handleFav);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addFav(product));
  };

  const handleDel = (product) => {
    dispatch(delFav(product));
  };

  const emptyCart = () => {
    return (
      <div className="empty-cart">
        <h2>Your Favorites is Empty</h2>
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
            <button onClick={() => handleDel(product)}>Remove</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Fav;
