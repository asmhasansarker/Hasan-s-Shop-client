import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from '../../App';

const Checkout = () => {
    const [user] = useContext(UserContext)
    
  const { productKey } = useParams();

  const [myProduct, setMyProduct] = useState({});

  let date = new Date();
  let dateString = date.toDateString('dd/MM/yyyy');

  useEffect(() => {
    fetch(`https://pumpkin-shortcake-28288.herokuapp.com/product/${productKey}`)
      .then((res) => res.json())
      .then((data) => setMyProduct(data));
      
  }, []);


  


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
      handleOrder();
      setShow(true)
    };

  const handleOrder = () =>{
      const newOrder = {...user, ...myProduct,dateString}
      fetch('https://pumpkin-shortcake-28288.herokuapp.com/addOrder', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify(newOrder)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
  }

  return (
    <div className="container">
      <h1>Checkout</h1>

      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{myProduct.productName}</td>
            <td>1</td>
            <td>{myProduct.productPrice}</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>

            <td>{myProduct.productPrice}</td>
          </tr>
        </tbody>
      </table>

      
    <div className="text-right">
      <Button variant="primary" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats {user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Your order summery</h3>
            <h5>Product Name : {myProduct.productName}</h5>
            <h6>Ordered Time : {dateString}</h6>
            <h6>You have to purchase: ${myProduct.productPrice}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>


    </div>
  );
};

export default Checkout;
