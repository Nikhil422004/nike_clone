import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            className="card-img"
            src="https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d7964ee-8017-4905-881b-07adbfdff95b/jordan-spizike-low-mens-shoes-LDT8cp.png"
            alt="Shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>$300</del>$200
              </div>

              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
