import "./Recommended.css";

function Recommended() {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">All Products</button>
        <button className="btns">Shoes</button>
        <button className="btns">Clothing</button>
        <button className="btns">Accessories</button>
        <button className="btns">Others</button>
      </div>
    </>
  );
}

export default Recommended;
