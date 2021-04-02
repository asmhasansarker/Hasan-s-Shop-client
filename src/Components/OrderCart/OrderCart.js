import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const OrderCart = (props) => {
    const {productImage, productName, productPrice, dateString, productKey} = props.order;
    const handleDeleteOrder = props.handleDeleteOrder;
    return (
        <div className="row align-items-center text-center">
            <div className="col-md-2">
                <img className="img-thumbnail" src={productImage} alt=""/>
            </div>

            <div className="col-md-3">{productName}</div>
            <div className="col-md-2">${productPrice}</div>
            <div className="col-md-2">1</div>
            <div className="col-md-2">{dateString}</div>
            <div className="col-md-1">
            <button
                onClick={() => handleDeleteOrder(productKey)}
              className="btn btn-danger"
            >
              
              <FontAwesomeIcon className="mx-2" icon={faTrashAlt} />
            </button>
            </div>
        </div>
    );
};

export default OrderCart;