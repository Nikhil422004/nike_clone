import "./Sidebar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import { useState } from "react";

function Sidebar({ handleChange }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorsOpen, setColorsOpen] = useState(false);

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };
  const togglePrice = () => {
    setPriceOpen(!priceOpen);
  };
  const toggleColors = () => {
    setColorsOpen(!colorsOpen);
  };

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img src="logo.jpg" alt="Nike Logo" height="90px" />
        </div>
        <div className="accordion">
          <h2 onClick={toggleCategory}>Category</h2>
          {categoryOpen && <Category handleChange={handleChange} />}
        </div>
        <div className="accordion">
          <h2 onClick={togglePrice}>Price</h2>
          {priceOpen && <Price handleChange={handleChange} />}
        </div>
        <div className="accordion">
          <h2 onClick={toggleColors}>Sports and Activities</h2>
          {colorsOpen && <Colors handleChange={handleChange} />}
        </div>
      </section>
    </>
  );
}

export default Sidebar;
