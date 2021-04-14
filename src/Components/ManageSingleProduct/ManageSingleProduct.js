import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const ManageSingleProduct = (props) => {
  const { register, handleSubmit } = useForm();
  const { productName, _id, productPrice, productWeight } = props.product;
  const handleDeleteProduct = props.handleDeleteProduct;

  const [editable, setEditabel] = useState(false);

  useEffect(() => {
    fetch("https://pumpkin-shortcake-28288.herokuapp.com/products")
      .then((res) => res.json())
  }, [props.product]);


  const onSubmit = (data) => {
;
    const afterUpdate = {
      productNewName: data.productNewName,
      productNewPrice: data.productNewPrice,
    };

    fetch(`https://pumpkin-shortcake-28288.herokuapp.com/update/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(afterUpdate),
    }).then((res) => {
      console.log("server side response");
    });

    setEditabel(!editable);
    
  };

  return (
    <>
      {!editable && (
        <div className="row my-2 text-center">
          <div className="col-md-3 text-left">{productName}</div>
          <div className="col-md-3">{productWeight}</div>
          <div className="col-md-3">${productPrice}</div>
          <div className="col-md-3">
            <div>
              <button
                onClick={() => setEditabel(!editable)}
                className="btn btn-success mr-3"
                data-toggle="tooltip"
                data-placement="left"
                title="Edit Product"
              >
                <FontAwesomeIcon className="mx-2" icon={faEdit} />
              </button>
              <button
                onClick={() => handleDeleteProduct(_id)}
                className="btn btn-danger"
                data-toggle="tooltip"
                data-placement="left"
                title="Delete Product"
              >
                <FontAwesomeIcon className="mx-2" icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
      )}

      {editable && (
        <form onSubmit={handleSubmit(onSubmit)} className="form-inline d-flex justify-content-between">
       
          <input
            className="form-control w-25"
            name="productNewName"
            defaultValue={productName}
         
            ref={register}
            id="productNewName"
          />

          <input
            className="form-control w-25 pl-5"
            name="productNewPrice"
            defaultValue={productWeight}
            ref={register}
            id="productNewPrice"
          />

       
          <input
            className="form-control w-25"
            name="productNewPrice"
            defaultValue={productPrice}
            ref={register}
            id="productNewPrice"
          />
          <br />

          <input type="submit" value="update" />
        </form>
      )}
    </>
  );
};

export default ManageSingleProduct;
