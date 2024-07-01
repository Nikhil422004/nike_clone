import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cards({ product }) {
  return (
    <>
      <section className="card">
        <Link to={`/product/${product.articleNo}`}>
          <img
            className="card-img"
            src={product.imageUrl}
            alt={product.productName}
          />
          <div className="card-details">
            <h3 className="card-title">{product.productName}</h3>

            <section className="card-price">
              {product.salePrice ? (
                <div className="price">
                  <del>${product.listPrice}</del>${product.salePrice}
                </div>
              ) : (
                <div className="price">${product.listPrice}</div>
              )}
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </Link>
      </section>
    </>
  );
}

export default Cards;
