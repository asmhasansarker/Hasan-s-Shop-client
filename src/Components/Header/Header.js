import React from "react";
import { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import './Header.css'

const Header = () => {
    const [user] = useContext(UserContext)
    return (
      <Container fluid className="custom-color">
        <div className="container">
      <Navbar collapseOnSelect expand="lg" variant="light"  >
        <Navbar.Brand as={Link} to="/" className="logo">Hasan's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <Nav>
            <Nav.Link as={Link} to="/home" className="mx-2 text-white">
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/orders" className="mx-2 text-white">
            Orders
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/addproduct">
            Add Product
            </Nav.Link>
            <Nav.Link as={Link} to="/manageproduct">
            Manage Product
            </Nav.Link> */}
            <Nav.Link as={Link} to="/admin" className="mx-2 text-white">
            Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/deals" className="mx-2 text-white">
            Deals
            </Nav.Link>

            <Nav.Link as={Link} to={user.email ? `/myaccount` : `/login`} className="mx-2 text-white">
            {user.email ? `${user.name}` : 'Login' }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </Container>
    );
};

export default Header;