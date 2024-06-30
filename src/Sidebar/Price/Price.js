import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="price" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="0-50"
        title="$0-$50"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="50-100"
        title="$50-$100"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="100-200"
        title="$100-$200"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="200-350"
        title="$200-$350"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="350-"
        title="Above $350"
        name="price"
      />
    </div>
  );
}

export default Price;
