import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/navbar";
import { NavLink } from "react-router-dom";
import React from 'react'


export  function Header({setRemove,remove}) {



    return (
        <Navbar bg="muted" expand="lg">
            <Container fluid>
                <NavLink to="/" className='navbar-brand'><img src="https://images.credly.com/images/65831159-6fab-4c69-9360-4f25ffc8fb4f/blob.png" alt="" width={"150px"} height={"100px"}/></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                       {/* < NavLink to="/" className='nav-link'>Home</NavLink> */}
                        <NavLink to="exchange" className='nav-link'>EX-rate</NavLink>
                        <NavLink to="About" className='nav-link'>About</NavLink>
                        <NavLink to="Contact "className='nav-link'>Contact</NavLink>
                    </Nav>
                    {localStorage.getItem("Loggedin") ? <Button className="btn btn-secondary" variant="contained" onClick={() => {
                        localStorage.removeItem("Loggedin") 
                        setRemove(!remove)
                     }}><NavLink to="/" className='nav-link'>Log Out</NavLink></Button> : 
                    <Button className="btn btn-secondary" variant="contained"><NavLink to="LogIn" className='nav-link'>Log In</NavLink></Button>}

                    
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
