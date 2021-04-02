import React, { useState } from "react";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import './AdminHeader.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faPlus } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
    const [user] = useContext(UserContext)
    const [showAddProduct, setShowAddProduct] = useState(true)
    const [showManageProduct, setShowManageProduct] = useState(false)

    const handleAddProduct = () =>{
        setShowManageProduct(false)
        setShowAddProduct(true)
    }
    const handleManageProduct = () =>{
        setShowManageProduct(true)
        setShowAddProduct(false)
    }




    return (
        <div className="container admin-header  pb-3">
      <Navbar collapseOnSelect expand="lg"  className="custom-header mb-3" >
        <Navbar.Brand as={Link} to="/myaccount"><img src={user.photo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <Nav className="mr-auto ml-5">
            <Nav.Link className="mx-2 text-white" onClick={() => handleManageProduct()}>
            <FontAwesomeIcon className="mx-2" icon={faThLarge} />
            Manage Product
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" onClick={() => handleAddProduct()}>
            <FontAwesomeIcon className="mx-2" icon={faPlus} />
            Add Product
            </Nav.Link>
            <Nav.Link  className="ml-3 text-white">
            Edit Product
            </Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {
          showAddProduct && <AddProduct></AddProduct>
      }
      {
          showManageProduct && <ManageProduct></ManageProduct>
      }


    </div>
    );
};

export default AdminHeader;