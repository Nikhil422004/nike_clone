import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <>
      <div>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark all"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value="Shoes"
            title="Shoes"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Accessories"
            title="Accessories"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Clothing"
            title="Clothing"
            name="test"
          />
        </div>
      </div>
    </>
  );
}

export default Category;
