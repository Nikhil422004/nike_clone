import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation({ handleInputChange }) {
  const state = useSelector((state) => state.handleCart);
  const stateF = useSelector((state) => state.handleFav);
  const handleChange = (event) => {
    handleInputChange(event);
  };

  return (
    <nav>
      <Link to="/nike_clone/" className="homebtn">
        <img src="logo.jpg" alt="Nike Logo" height="70px" />
      </Link>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Product"
          onChange={handleChange}
        />
      </div>

      <div className="profile-container">
        <Link to="/nike_clone/fav" className="favbtn">
          <FiHeart className="nav-icons" />
          Favourites ({stateF.length})
        </Link>
        <Link to="/nike_clone/cart" className="gocartbtn">
          <AiOutlineShoppingCart className="nav-icons" />
          Cart ({state.length})
        </Link>

        <Link to="/nike_clone/profile" className="gocartbtn">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
