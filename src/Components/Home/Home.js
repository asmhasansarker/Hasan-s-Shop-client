import React, { useEffect, useState } from "react";
import ProductCart from "../ProductCart/ProductCart";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pumpkin-shortcake-28288.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
     
      <div className="input-group my-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
      
      {!products.length && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}

      <div className="row d-flex justify-content-around align-items-center">
        {products.map((product) => (
          <ProductCart key={product._id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
