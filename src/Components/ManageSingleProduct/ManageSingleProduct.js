import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const ManageSingleProduct = (props) => {
  const {
    productName,
    productKey,
    _id,
    productPrice,
    productWeight,
  } = props.product;
  const handleDeleteProduct = props.handleDeleteProduct;

  const [editable, setEditabel] = useState(false);
  const [afterUpdate, setAfterUpdate] = useState({
    productNewName: "",
    productNewPrice: "",
  });

  const handleBlur = (event) => {
    if (event.target.name === "name") {
      setAfterUpdate({
        productNewName: event.target.value,
      });
    }
    if (event.target.name === "price") {
      setAfterUpdate({
        productNewPrice: event.target.value,
      });
    }
  };

  const updateProduct = (id) => {
    fetch(`https://pumpkin-shortcake-28288.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(afterUpdate),
    });
  };
  return (
    <>
      <div className="row my-2 text-center">
        <div className="col-md-3 text-left">{productName}</div>
        <div className="col-md-3">{productWeight}</div>
        <div className="col-md-3">${productPrice}</div>
        <div className="col-md-3">
          <div>
            <button
              onClick={() => setEditabel(!editable)}
              className="btn btn-success mr-3"
            >
              <FontAwesomeIcon className="mx-2" icon={faEdit} />
            </button>
            <button
              onClick={() => handleDeleteProduct(_id)}
              className="btn btn-danger"
            >
              
              <FontAwesomeIcon className="mx-2" icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="d-flex justify-content-between my-3">
        <div>
          <h5>Product name : {productName}</h5>
          <h5>Product Price : {productPrice}</h5>
        </div>
        <div>
          <button
            onClick={() => setEditabel(!editable)}
            className="btn btn-success mr-3"
          >
            <FontAwesomeIcon className="mx-2" icon={faEdit} />
          </button>
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="btn btn-primary"
          >
            {" "}
            <FontAwesomeIcon className="mx-2" icon={faTrashAlt} />
          </button>
        </div>
      </div> */}
      {editable && (
        <div>
          <h5>
            Product Name : <input name="name" onBlur={handleBlur} type="text" />{" "}
          </h5>
          <h5>
            Product Price :{" "}
            <input name="price" onBlur={handleBlur} type="text" />{" "}
          </h5>
          <button
            onClick={() => updateProduct(_id)}
            className="btn btn-success"
          >
            Update
          </button>
        </div>
      )}
    </>
  );
};

export default ManageSingleProduct;
