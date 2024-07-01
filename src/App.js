import { useEffect, useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./components/Cart";

import { Routes, Route } from "react-router-dom";
import "./index.css";

import products from "./db/data";

function App() {
  // const products = useSelector((state) => state);

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .cathch((err) => {
  //       console.log("err", err);
  //     });
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "price") {
      setSelectedPriceRange(value);
    } else {
      setSelectedCategory(value);
    }
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query, priceRange) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selected ||
          product.division === selected ||
          product.subCategory === selected ||
          product.listPrice === selected ||
          product.productName === selected
      );
    }

    if (priceRange) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.salePrice || product.listPrice;
        if (priceRange === "350-") {
          return price > 350;
        } else {
          const [min, max] = priceRange.split("-").map(Number);
          return price >= min && price < max;
        }
      });
    }

    return filteredProducts;
  }

  const result = filteredData(
    products,
    selectedCategory,
    query,
    selectedPriceRange
  );

  return (
    <>
      <Topbar />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar handleChange={handleChange} />
              <Recommended handleClick={handleClick} />
              <Products result={result} />
            </>
          }
        />
        <Route
          path="/product/:articleNo"
          element={<ProductDetails products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
