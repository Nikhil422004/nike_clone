import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/action/userActions";
import "./Topbar.css";

function Topbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="topbar">
      <span>
        <a href="#"> Find A Store</a>
      </span>
      <span>
        <a href="#"> Help</a>
      </span>
      <span>
        <a href="#"> Join Us</a>
      </span>
      {user ? (
        <>
          <span>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </span>
          <span>
            <Link to="/profile">Welcome, {user.name}</Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to="/login">Sign In</Link>
          </span>
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
        </>
      )}
    </div>
  );
}

export default Topbar;