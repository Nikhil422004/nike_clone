import "./Recommended.css";
import Buttons from "../components/Buttons";

function Recommended({ handleClick }) {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All" />
        <Buttons onClickHandler={handleClick} value="Men" title="Men" />
        <Buttons onClickHandler={handleClick} value="Women" title="Women" />
        <Buttons onClickHandler={handleClick} value="Unisex" title="Unisex" />
      </div>
    </>
  );
}

export default Recommended;
