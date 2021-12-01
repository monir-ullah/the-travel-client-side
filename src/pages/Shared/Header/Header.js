// This is use for import section
import React from 'react';
import './Header.css'
import logo from '../../../Images/logo.png'
import {  Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// This is Header Component
const Header = () => {
  // This is use to get use info and logout function
  const {user, logOut} = useAuth();

    return (
      // THis is use for total nav bar
        <div >
           <Navbar className="shadow" bg="light" variant="light" collapseOnSelect expand="lg" fixed="top">
  <Container>
  <Link to="/"> <Navbar.Brand ><Image src={logo}></Image></Navbar.Brand> </Link>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* This is use for change the Route or page */}
    <Nav className="me-auto header-link">
      <Link to="/home">Home</Link>
      <Link to="/tourDestination">Destination</Link>
      <Link to="/addService">Add Destination</Link>
      <Link to="/manageAllOrder">Manage Orders</Link>
      <Link to="/myOrders">My Orders</Link>
      
    </Nav>
    {/* THis will show sing in or logout button and name */}
    <Nav className="header-link signin-signout">
    
     { user?.email ?
      <Link onClick={logOut} to="/login">LogOut</Link>:
      <Link to="/login">SignIn</Link>
     }
    <Navbar.Text> 
      <h4><i className="fas fa-user"></i> {user?.displayName||user.email}</h4>
    </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;