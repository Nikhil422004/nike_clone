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
        <div className="accordion">
          <h4 onClick={toggleCategory}>Category »</h4>
          {categoryOpen && <Category handleChange={handleChange} />}
        </div>
        <div className="accordion">
          <h4 onClick={togglePrice}>Price »</h4>
          {priceOpen && <Price handleChange={handleChange} />}
        </div>
        <div className="accordion">
          <h4 onClick={toggleColors}>Sports/Activities »</h4>
          {colorsOpen && <Colors handleChange={handleChange} />}
        </div>
      </section>
    </>
  );
}

export default Sidebar;
