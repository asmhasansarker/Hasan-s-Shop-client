import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ManageSingleProduct from "../ManageSingleProduct/ManageSingleProduct";

const ManageProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://pumpkin-shortcake-28288.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [allProducts]);

  

  const handleDeleteProduct = (id) => {
    fetch(`https://pumpkin-shortcake-28288.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    
  };

  return (
    <div className="container">
      
      <h1 className="text-center mb-2">Manage Products</h1>
      <div className="row my-4 py-3 font-weight-bold text-center bg-light">
        <div className="col-md-3 text-left">Product Name</div>
        <div className="col-md-3">Weight</div>
        <div className="col-md-3">Price</div>
        <div className="col-md-3">Action</div>
      </div>


      <div className="row d-flex justify-content-center mt-2">
        {!allProducts.length && <Spinner animation="grow" variant="primary" />
        }
      </div>

      {allProducts.map((product) => (
        <ManageSingleProduct
          key={product._id}
          handleDeleteProduct={handleDeleteProduct}
          product={product}
        ></ManageSingleProduct>
      ))}
    </div>
  );
};

export default ManageProduct;
