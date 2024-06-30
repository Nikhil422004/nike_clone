import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="Lifestyle"
        title="Lifestyle"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="Soccer"
        title="Soccer"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="Basketball"
        title="Basketball"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="Running"
        title="Running"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="Workouts"
        title="Workouts"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="Swimming"
        title="Swimming"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="Dance"
        title="Dance"
        name="test2"
      />
    </div>
  );
}

export default Colors;
