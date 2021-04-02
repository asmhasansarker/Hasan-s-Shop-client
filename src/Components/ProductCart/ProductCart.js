import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ProductCart.css'

const ProductCart = (props) => {
    // const deleteEvent = id =>{
        
    // }
    // console.log(props)
    const {productName, productWeight, productPrice,productImage, productKey} = props.product;
    return (
        <div className="col-md-3 text-center p-1  border shadow rounded mx-1 my-2 productCart">
            <img className="img-fluid"  src={productImage} alt=""/>
            <h5>{productName} - {productWeight}</h5>
            <div className="d-flex justify-content-around py-2">
                <h5>${productPrice}</h5>
                <Link to={`/product/${productKey}`}>
                    <button className="btn btn-primary"> <FontAwesomeIcon className="mx-2" icon={faShoppingCart} />Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;