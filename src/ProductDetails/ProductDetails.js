import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, addFav } from "../redux/action";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./ProductDetails.css";

function ProductDetails({ products }) {
  // const {articleNo} = useParams();
  // const [product, setProduct] = useState([])

  // useEffect(()=>{
  //     const getProduct = async () => {
  //         const response = await fetch(`https://apilink.com/${articleNo}`)
  //         setProduct(await response.json())

  //     }
  //     getProduct();
  // }, [input])
  const { articleNo } = useParams();
  const product = products.find((products) => products.articleNo === articleNo);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const addProductF = (product) => {
    dispatch(addFav(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <img
        className="card-img"
        src={product.imageUrl}
        alt={product.productName}
      />
      <h1>{product.productName}</h1>
      <p>Category: {product.category}</p>
      {product.salePrice ? (
        <p className="price">
          <del>{product.listPrice}</del>
          {product.salePrice}
        </p>
      ) : (
        <p className="price">{product.listPrice}</p>
      )}
      <p>{product.description}</p>
      <button className="cartbtn" onClick={() => addProduct(product)}>
        Add to Cart
      </button>
      <button className="favbtn" onClick={() => addProductF(product)}>
        Add to Favourites
      </button>
      <Link to="/cart" className="gocartbtn">
        Go to Cart
      </Link>
    </div>
  );
}

export default ProductDetails;
