import "./Sidebar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
