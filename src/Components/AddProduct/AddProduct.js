import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [productImageURL, setProductImageURL] = useState(null);

  const productKey = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return n.slice(0, 9);
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "8f57b0a9bdb6595706537b44e69fd4b6");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setProductImageURL(res.data.data.display_url))
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    const productData = {
      productName: data.productName,
      productWeight: data.productWeight,
      productPrice: data.productPrice,
      productImage: productImageURL,
      productKey: productKey(),
    };

    const url = `https://pumpkin-shortcake-28288.herokuapp.com/addProduct`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response"));
  };

  return (
    <div className="container ">
      <h1 className="text-center mb-5">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="custom-design">
          <div className="custom-form">
            <label className="font-weight-bold" htmlFor="productName">Product Name</label>
            <input
              className="form-control "
              name="productName"
              placeholder="Enter product name"
              ref={register}
              id="productName"
            />
          </div>

          <div className="custom-form">
            <label className="font-weight-bold" htmlFor="productWight">Wight</label>
            <input
              className="form-control "
              name="productWeight"
              placeholder="Enter product weight"
              ref={register}
              id="productWight"
            />
          </div>

          

          <div className="custom-form">
            <label className="font-weight-bold" htmlFor="productPrice">Add Price</label>
            <input
              className="form-control "
              name="productPrice"
              placeholder="Enter product price"
              ref={register}
              id="productPrice"
            />
          </div>

          <div className="custom-form">
            <label className="font-weight-bold" htmlFor="productPrice">Add Photo</label> <br />
            <input
              name="productPhoto"
              type="file"
              onChange={handleImageUpload}
            />
          </div>

          <div className="custom-form">
            <button className="btn btn-success mt-3 mr-4" type="submit">
              Submit
            </button>
          </div>
        </div>

       

        {/* <input type="submit" /> */}

        {/* <div className="d-flex justify-content-end mt-5 mr-5">
          <button className="btn btn-success mt-3 mr-4" type="submit">
            Submit
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default AddProduct;
