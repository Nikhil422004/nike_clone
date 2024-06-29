import "./Price.css";
function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$0-50
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$50-100
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$100-200
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$200-500
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Over 500
      </label>
    </div>
  );
}

export default Price;
