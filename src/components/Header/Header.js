import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Opus it institue</Navbar.Brand>
    <Nav className="ms-auto">

        <NavLink className="nav-link"  to ="/home"> <i className="fas fa-house-user"></i> home</NavLink>
        <NavLink className ="nav-link" to ="/Services"> <i className="fas fa-search"></i>  services</NavLink>
        <NavLink className="nav-link" to ="/about">  <i className="fas fa-info"></i> about</NavLink>
        <NavLink className ="nav-link" to ="/review"> <i className="fas fa-angle-double-right"></i> student review</NavLink>
     
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;