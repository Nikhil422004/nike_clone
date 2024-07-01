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
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Product"
          onChange={handleChange}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
          Favourites ({stateF.length})
        </a>
        <Link to="/cart" className="gocartbtn">
          <AiOutlineShoppingCart className="nav-icons" />
          Cart ({state.length})
        </Link>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
