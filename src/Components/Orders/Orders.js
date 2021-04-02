import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import OrderCart from "../OrderCart/OrderCart";

const Orders = () => {
  const [user] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://pumpkin-shortcake-28288.herokuapp.com/orders?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDeleteOrder = (key) => {
    console.log(key);
    fetch(`https://pumpkin-shortcake-28288.herokuapp.com/deleteOrder/${key}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="row text-center h6 bg-success px-2 py-3 ">
        <div className="col-md-2">Product Image </div>
        <div className="col-md-3">Product Name</div>
        <div className="col-md-2">Product Price</div>
        <div className="col-md-2">Product Quantity</div>
        <div className="col-md-2">Time</div>
        <div className="col-md-1">Action</div>
      </div>

      <div className="row d-flex justify-content-center mt-2">
        {!orders.length && <Spinner animation="grow" variant="primary" />
        }
      </div>

      {orders.map((order) => (
        <OrderCart
          handleDeleteOrder={handleDeleteOrder}
          order={order}
        ></OrderCart>
      ))}
    </div>
  );
};

export default Orders;
