import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addFav } from "../redux/action";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./ProductDetails.css";

function ProductDetails({ products }) {
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
    <>
      <div className="container">
        <img
          className="image"
          src={product.imageUrl}
          alt={product.productName}
        />
        <div className="details">
          <h1>{product.productName}</h1>
          <h3>Category: {product.category}</h3>
          {product.salePrice ? (
            <p className="price">
              <del>${product.listPrice}</del>${product.salePrice}
            </p>
          ) : (
            <p className="price">${product.listPrice}</p>
          )}
          <p>{product.description}</p>
          <button className="btns" onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <button className="btns" onClick={() => addProductF(product)}>
            Add to Favourites
          </button>
          <Link to="/cart" className="btns">
            Go to Cart
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
